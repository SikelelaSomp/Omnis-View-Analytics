import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, BarChart3, Code2, Database, Users, Zap, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";
import beforeAfterImage from "@/assets/before-after-data.jpg";
import aiAssistantIcon from "@/assets/ai-assistant-icon.jpg";
// Image for the Audience section will be served from public/lovable-uploads

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                OVA: Your AI Copilot for{" "}
                <span className="text-primary">Data</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Faster Insights, Cleaner Code, Smarter Decisions. Turn raw data into clear visualizations,
                SQL queries, and actionable insights — without repetitive work.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="/signup?type=waitlist">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="/signup?type=early-access">
                  Get Early Access
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Your AI companion works alongside you, not for you.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="OVA AI Dashboard Interface"
              className="relative z-10 rounded-3xl shadow-glow w-full"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Stop Wasting Hours on Repetitive Data Work
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    Reformatting Excel sheets and repeating visualizations takes too much time
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    Writing complex SQL queries slows down your insights
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    Turning raw numbers into business decisions can feel overwhelming
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={beforeAfterImage}
                alt="Before and After Data Analysis"
                className="rounded-2xl shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet OVA, Your AI Data Companion
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              OVA assists analysts by generating clean visualizations, SQL queries, and actionable insights
              from your data — all in a safe, interactive workspace. You stay in control, making better
              decisions faster without over-relying on AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-soft transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Clean Visualizations & Clear Insights</CardTitle>
                <CardDescription>
                  Upload your data, get instantly interpretable charts and explanations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-soft transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Code Generation</CardTitle>
                <CardDescription>
                  Every insight comes with the code that produced it — learn or customize as you go.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card border-border hover:shadow-soft transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>SQL Query Assistant</CardTitle>
                <CardDescription>
                  Connect to your database and query data faster than ever, with AI guidance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section id="how-it-works" className="bg-gradient-section py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={aiAssistantIcon}
                alt="AI Assistant with Data Analytics"
                className="rounded-2xl shadow-soft w-full"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                Why Analysts Love OVA
              </h2>
              <p className="text-xl text-muted-foreground">
                It's like Power BI + ChatGPT + SQL, all in one friendly companion.
                Not a replacement — a partner that helps you work smarter, faster, and with confidence.
              </p>
              <div className="flex items-center space-x-4 text-lg">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Power BI</span>
                </div>
                <span className="text-muted-foreground">+</span>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">ChatGPT</span>
                </div>
                <span className="text-muted-foreground">+</span>
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">SQL</span>
                </div>
                <span className="text-muted-foreground">=</span>
                <span className="font-bold text-primary">OVA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Designed for Anyone Who Works with Data
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="font-medium">BI Analysts</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="font-medium">Data Analysts</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="font-medium">Freelancers</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="font-medium">Teams & Companies</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg sm:col-span-2">
                  <Users className="h-6 w-6 text-primary" />
                  <span className="font-medium">Students Learning Data Skills</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/audince-section.jpg"
                alt="Target Audience - Data Professionals"
                className="rounded-2xl shadow-soft w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-section py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Data Professionals Are Saying About OVA
            </h2>
            <p className="text-lg text-muted-foreground">
              Industry professionals share how OVA would transform their daily workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">SA</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Anderson</p>
                    <p className="text-sm text-muted-foreground">BI Analyst, TechCorp</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "This concept is amazing! It would automate so much of my repetitive visualization work.
                  Having AI generate the code while I focus on insights would be a game-changer."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Nandipha Phiko</p>
                    <p className="text-sm text-muted-foreground">Data Scientist</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "I love this idea! The SQL assistance would simplify complex queries that usually take me hours.
                  This would streamline my entire data analysis process."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">EL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Keotshepile Tshele</p>
                    <p className="text-sm text-muted-foreground">Freelance Analyst</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "This would revolutionize how I deliver projects to clients! The automation of data cleaning
                  and visualization would help me focus on strategic insights instead of technical work."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Start Making Smarter Decisions Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Sign up now for early access, a waitlist spot, or our paid beta program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="/signup?type=waitlist">
                  Join Waitlist (Free)
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="text-lg px-8 py-6" asChild>
                <a href="/signup?type=early-access">
                  Get Early Access (Paid Beta)
                </a>
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 pt-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
