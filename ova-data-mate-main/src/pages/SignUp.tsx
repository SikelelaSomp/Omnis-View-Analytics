import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearchParams } from "react-router-dom";
import { useForm as useFormspreeForm } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  planInterest: z.enum(["pro", "premium", "enterprise"], {
    required_error: "Please select a plan",
  }),
  willingnessToPay: z.enum(["yes", "no"], {
    required_error: "Please indicate your willingness to pay",
  }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const SignUp = () => {
  const [submissionType, setSubmissionType] = useState<"early-access" | "trial" | null>(null);
  const [searchParams] = useSearchParams();
  const urlType = searchParams.get("type");
  
  // Formspree integration
  const [state, submitToFormspree] = useFormspreeForm("mblavwgk");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      planInterest: undefined,
      willingnessToPay: undefined,
      message: "",
    },
  });

  // Pre-select the appropriate option based on URL parameter
  useEffect(() => {
    if (urlType === "early-access") {
      form.setValue("willingnessToPay", "yes");
    } else if (urlType === "waitlist") {
      form.setValue("willingnessToPay", "no");
    }
  }, [urlType, form]);

  const watchWillingness = form.watch("willingnessToPay");

  const onSubmit = async (data: FormData) => {
    console.log("Form submitted with data:", data);
    
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("company", data.company || "");
    formData.append("planInterest", data.planInterest);
    formData.append("willingnessToPay", data.willingnessToPay);
    formData.append("message", data.message || "");
    formData.append("formType", "signup");
    formData.append("urlType", urlType || "general");
    formData.append("submissionDate", new Date().toISOString());

    await submitToFormspree(formData);
    
    // Set submission type after successful submission
    const type = data.willingnessToPay === "yes" ? "early-access" : "trial";
    setSubmissionType(type);
  };

  // Debug: Check if we're in success state
  console.log("Success check - state.succeeded:", state.succeeded, "submissionType:", submissionType);
  
  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <main className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {submissionType === "early-access" ? "Welcome Aboard!" : "Thanks for Signing Up!"}
              </h1>
              {submissionType === "early-access" ? (
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Thanks! You've secured early access to OVA. We'll reach out shortly with payment details and onboarding instructions.
                  </p>
                  <p className="font-semibold text-primary">Welcome aboard!</p>
                </div>
              ) : (
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Thanks for signing up! You'll get access to OVA once the product is live. Your 14-day trial starts automatically.
                  </p>
                  <p className="font-semibold text-primary">We can't wait for you to try it!</p>
                </div>
              )}
              <Button
                variant="hero"
                size="lg"
                className="mt-8"
                onClick={() => window.location.href = "/"}
              >
                Back to Home
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            {urlType === "early-access" 
              ? "Get Early Access to OVA — Your AI Data Companion"
              : urlType === "waitlist"
              ? "Join the OVA Waitlist — Be First to Experience AI Data Analysis"
              : "Get Early Access to OVA — Your AI Data Companion"
            }
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {urlType === "early-access"
              ? "Sign up today to secure your early access to OVA's paid beta program and start transforming your data workflow."
              : urlType === "waitlist"
              ? "Join our waitlist to be notified when OVA launches and get free access to our trial program."
              : "Sign up today to try OVA, secure your early access, or book a demo with our team."
            }
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-foreground">
                {urlType === "early-access" 
                  ? "Join OVA Early Access (Paid Beta)"
                  : urlType === "waitlist"
                  ? "Join OVA Waitlist (Free Trial)"
                  : "Join OVA Early Access"
                }
              </CardTitle>
            </CardHeader>
            <CardContent>
              {state.errors && (
                <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-destructive text-sm">
                    Failed to submit form. Please try again.
                  </p>
                </div>
              )}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Company/Role */}
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company / Role</FormLabel>
                        <FormControl>
                          <Input placeholder="Company or role (optional)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Plan Interest */}
                  <FormField
                    control={form.control}
                    name="planInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plan Interest / Usage *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a plan" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pro">Pro (students / light users)</SelectItem>
                            <SelectItem value="premium">Premium (frequent users / junior analysts)</SelectItem>
                            <SelectItem value="enterprise">Enterprise (businesses / senior analysts)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Willingness to Pay */}
                  <FormField
                    control={form.control}
                    name="willingnessToPay"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Willingness to Pay Now *</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="yes" />
                              <Label htmlFor="yes">Yes, I'm ready to pay for early access</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="no" />
                              <Label htmlFor="no">Not yet, just signing up for trial</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message/Notes */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message / Notes</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any notes or questions (optional)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Conditional CTA Button */}
                  <div className="pt-4">
                    {watchWillingness === "yes" ? (
                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="w-full"
                        disabled={state.submitting}
                      >
                        {state.submitting ? "Submitting..." : "Submit & Get Early Access"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : watchWillingness === "no" ? (
                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="w-full"
                        disabled={state.submitting}
                      >
                        {state.submitting ? "Submitting..." : "Submit & Join Trial"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" variant="hero" size="lg" className="w-full" disabled>
                        Please complete the form
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  {/* Trust Message */}
                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground">
                      Your information is safe and private. We never share your data.
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;