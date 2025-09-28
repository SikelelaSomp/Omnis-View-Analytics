import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, X, ArrowRight, Clock, Settings, DollarSign, Zap, Users, Database, Code2, BarChart3, Shield, Headphones } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              💡 Simple, Transparent Pricing —{" "}
              <span className="text-primary">Choose the Plan That Fits You</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              All plans include a 14-day free trial (100 queries included). No credit card required to start.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Pro Plan */}
            <Card className="bg-card border-border hover:shadow-soft transition-smooth relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Pro</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  ✅ Best for students, beginners, and light users
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">R149</div>
                  <div className="text-muted-foreground">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">200 queries / month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Clean visualizations & insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">SQL query assistance (basic)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Access to AI code generation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Community support</span>
                  </div>
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-card border-primary hover:shadow-glow transition-smooth relative scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Premium</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  ✅ Best for frequent users & junior analysts
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">R380</div>
                  <div className="text-muted-foreground">/month</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">1,000 queries / month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Everything in Pro, plus:</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Advanced SQL guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Faster response times</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Priority support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Early access to new features</span>
                  </div>
                </div>
                <Button variant="hero" size="lg" className="w-full">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-card border-border hover:shadow-soft transition-smooth relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Enterprise</CardTitle>
                <CardDescription className="text-muted-foreground mb-4">
                  ✅ Best for businesses, teams, and senior analysts
                </CardDescription>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">Custom</div>
                  <div className="text-muted-foreground">Pricing</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Custom usage limits (5,000+ queries / month)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Everything in Premium, plus:</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Team accounts & collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Dedicated account manager</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">24/7 premium support</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Custom integrations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Security & compliance (SSO, encryption)</span>
                  </div>
                </div>
                <Button variant="hero-outline" size="lg" className="w-full">
                  Book a Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Compare Features
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">Feature</TableHead>
                      <TableHead className="text-center">Pro</TableHead>
                      <TableHead className="text-center">Premium</TableHead>
                      <TableHead className="text-center">Enterprise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Monthly Price</TableCell>
                      <TableCell className="text-center">R149</TableCell>
                      <TableCell className="text-center">R380</TableCell>
                      <TableCell className="text-center">Custom</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Queries per month</TableCell>
                      <TableCell className="text-center">200</TableCell>
                      <TableCell className="text-center">1,000</TableCell>
                      <TableCell className="text-center">Custom (5,000+)</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Visualizations & insights</TableCell>
                      <TableCell className="text-center"><Check className="h-5 w-5 text-primary mx-auto" /></TableCell>
                      <TableCell className="text-center"><Check className="h-5 w-5 text-primary mx-auto" /></TableCell>
                      <TableCell className="text-center"><Check className="h-5 w-5 text-primary mx-auto" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">SQL query assistant</TableCell>
                      <TableCell className="text-center">Basic</TableCell>
                      <TableCell className="text-center">Advanced</TableCell>
                      <TableCell className="text-center">Advanced + Custom</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">AI code generation</TableCell>
                      <TableCell className="text-center"><Check className="h-5 w-5 text-primary mx-auto" /></TableCell>
                      <TableCell className="text-center"><Check className="h-5 w-5 text-primary mx-auto" /></TableCell>
                      <TableCell className="text-center"><Check className="h-5 w-5 text-primary mx-auto" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Priority support</TableCell>
                      <TableCell className="text-center"><X className="h-5 w-5 text-muted-foreground mx-auto" /></TableCell>
                      <TableCell className="text-center"><Check className="h-5 w-5 text-primary mx-auto" /></TableCell>
                      <TableCell className="text-center">24/7</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Team accounts</TableCell>
                      <TableCell className="text-center"><X className="h-5 w-5 text-muted-foreground mx-auto" /></TableCell>
                      <TableCell className="text-center"><X className="h-5 w-5 text-muted-foreground mx-auto" /></TableCell>
                      <TableCell className="text-center"><Check className="h-5 w-5 text-primary mx-auto" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Custom integrations</TableCell>
                      <TableCell className="text-center"><X className="h-5 w-5 text-muted-foreground mx-auto" /></TableCell>
                      <TableCell className="text-center"><X className="h-5 w-5 text-muted-foreground mx-auto" /></TableCell>
                      <TableCell className="text-center"><Check className="h-5 w-5 text-primary mx-auto" /></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Dedicated account manager</TableCell>
                      <TableCell className="text-center"><X className="h-5 w-5 text-muted-foreground mx-auto" /></TableCell>
                      <TableCell className="text-center"><X className="h-5 w-5 text-muted-foreground mx-auto" /></TableCell>
                      <TableCell className="text-center"><Check className="h-5 w-5 text-primary mx-auto" /></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why OVA is the Smart Choice for Analysts and Teams
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card border-border hover:shadow-soft transition-smooth">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Time Saved</CardTitle>
                <CardDescription>
                  Spend hours less on repetitive tasks — OVA handles the coding, visualizations, and queries.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-soft transition-smooth">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Control & Flexibility</CardTitle>
                <CardDescription>
                  See the code, customize outputs, and adapt to your workflow.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-soft transition-smooth">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Affordability & Scalability</CardTitle>
                <CardDescription>
                  Flexible plans that grow with your data needs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-soft transition-smooth">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">UX & Productivity</CardTitle>
                <CardDescription>
                  Intuitive interface, smooth workflow, and easy collaboration.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              ✨ Start Smarter Data Decisions Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose your plan, start your 14-day free trial, and experience OVA without risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6">
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Can I switch plans anytime?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Upgrade or downgrade in just a few clicks. Changes take effect immediately and billing is prorated.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Is there a free trial?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, we offer a 14-day free trial with full access to your chosen plan. No credit card required to start.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  What kind of support is available?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We offer standard support for Pro users, priority support for Premium users with faster response times, and 24/7 dedicated support for Enterprise customers.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What happens if I exceed my usage limits?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We'll notify you when you're approaching your limits. You can upgrade your plan or purchase additional usage credits as needed.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Is my data secure?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. We use enterprise-grade security measures, including data encryption at rest and in transit. Enterprise customers get additional security features and compliance certifications.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;