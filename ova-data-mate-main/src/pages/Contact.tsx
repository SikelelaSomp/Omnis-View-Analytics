import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm as useFormspreeForm } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, MessageCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.enum(["general", "feedback", "partnership", "support"], {
    required_error: "Please select a subject",
  }),
  message: z.string().min(10, "Please enter a message with at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  // Formspree integration
  const [state, submitToFormspree] = useFormspreeForm("mblavwgk");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: undefined,
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log("Contact form submitted with data:", data);
    
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);
    formData.append("formType", "contact");
    formData.append("submissionDate", new Date().toISOString());

    await submitToFormspree(formData);
  };

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-subtle">
        <Header />
        <main className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Message Sent!
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Thanks for reaching out! We'll get back to you shortly.
              </p>
              <Button
                variant="hero"
                size="lg"
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
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <MessageCircle className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            We'd Love to Hear From You
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Questions, feedback, or suggestions — reach out and we'll get back to you as soon as possible. 
            Or explore how OVA works via our guided demo video.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-2" />
                  Send us a Message
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
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Subject */}
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject / Reason for Contact *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="feedback">Feedback / Suggestion</SelectItem>
                              <SelectItem value="partnership">Partnership / Business Inquiry</SelectItem>
                              <SelectItem value="support">Support / Technical Issue</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message / Notes *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Type your message here" 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={state.submitting}
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Additional Details */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:hello@ova.ai" 
                      className="text-primary hover:text-primary-glow transition-smooth"
                    >
                      hello@ova.ai
                    </a>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-muted-foreground">
                    We typically respond within 24 hours during business days. 
                    For urgent matters, please mention it in your subject line.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="hero-outline" size="lg" className="w-full" asChild>
                  <a href="/signup?type=waitlist">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="/pricing">
                    View Pricing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Demo Video Placeholder */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  See OVA in Action
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Demo video coming soon
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;