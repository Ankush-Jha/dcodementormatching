"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code2, ArrowRight, ArrowLeft, CheckCircle2, Users, Target, Calendar, BookOpen } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function OnboardingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = (searchParams.get("role") === "mentor" ? "mentor" : "mentee") as "mentor" | "mentee"
  const [step, setStep] = useState(0)

  const steps = [
    {
      title: role === "mentor" ? "Welcome, Mentor" : "Welcome to DCODE",
      icon: Code2,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {role === "mentor" ? "Help mentees grow with your guidance" : "Welcome to DCODE"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              {role === "mentor"
                ? "This quick onboarding sets up your mentor profile so mentees can discover and connect with you."
                : "We're excited to help you find the perfect mentor for your open source journey. This quick onboarding will help us understand your goals and match you with the right mentors."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <Card className="p-6 bg-card border-border">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2 text-foreground">
                {role === "mentor" ? "Impact Developers" : "Expert Mentors"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {role === "mentor"
                  ? "Share expertise and guide mentees through real-world projects"
                  : "Connect with experienced developers across major technologies"}
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <Target className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2 text-foreground">
                {role === "mentor" ? "Flexible Mentoring" : "Personalized Matching"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {role === "mentor"
                  ? "Define availability, capacity, and areas you want to mentor"
                  : "AI-powered algorithm finds your perfect mentor match"}
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <Calendar className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2 text-foreground">Flexible Scheduling</h3>
              <p className="text-sm text-muted-foreground">
                {role === "mentor"
                  ? "Share times you can mentor and meeting preferences"
                  : "Match with mentors based on your availability"}
              </p>
            </Card>
            <Card className="p-6 bg-card border-border">
              <BookOpen className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2 text-foreground">
                {role === "mentor" ? "Guided Mentorship" : "Guided Learning"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {role === "mentor"
                  ? "Help mentees with first-issue picks and learning paths"
                  : "Get personalized issue recommendations and learning paths"}
              </p>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "How It Works",
      icon: Target,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Your Journey Ahead</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Here's what happens after you complete this onboarding
            </p>
          </div>

          <div className="space-y-6 max-w-2xl mx-auto">
            {[
              {
                step: "1",
                title: "Complete Your Assessment",
                description:
                  "Tell us about your skills, goals, availability, and learning preferences. This takes about 10 minutes.",
              },
              {
                step: "2",
                title: "Get Matched",
                description:
                  "Our AI analyzes your profile and finds 3-5 mentors with the highest compatibility scores.",
              },
              {
                step: "3",
                title: "Review & Connect",
                description:
                  "Browse mentor profiles, see compatibility breakdowns, and send connection requests to your favorites.",
              },
              {
                step: "4",
                title: "Start Learning",
                description:
                  "Once matched, receive personalized first issue recommendations and begin your mentorship journey.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{item.step}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Terms & Privacy",
      icon: CheckCircle2,
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Terms & Privacy</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Please review and accept our terms to continue
            </p>
          </div>

          <Card className="p-6 bg-card border-border max-w-2xl mx-auto">
            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Terms of Service</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By using DCODE, you agree to maintain professional conduct, respect mentor and mentee time
                  commitments, and provide honest feedback. All interactions should be constructive and focused on
                  learning and growth.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-foreground">Privacy Policy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We collect and use your profile information solely for matching purposes. Your data is encrypted and
                  never shared with third parties without consent. You can delete your account and data at any time.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-foreground">Code of Conduct</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  DCODE is committed to providing a harassment-free experience for everyone. We do not tolerate
                  harassment, discrimination, or inappropriate behavior of any kind. Violations may result in account
                  suspension.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-foreground">Matching Algorithm</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our AI matching considers technical skills, availability, learning styles, and communication
                  preferences. While we strive for optimal matches, compatibility is not guaranteed. You can request new
                  matches if needed.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-1" required />
                <span className="text-sm text-foreground">
                  I have read and agree to the Terms of Service, Privacy Policy, and Code of Conduct
                </span>
              </label>
            </div>
          </Card>
        </div>
      ),
    },
  ]

  const currentStep = steps[step]
  const progress = ((step + 1) / steps.length) * 100

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      router.push(`/assessment?role=${role}`)
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">DCODE</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Step {step + 1} of {steps.length}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 py-4">
        <Progress value={progress} className="h-2" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">{currentStep.content}</div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 0}
              className="border-border text-foreground bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button onClick={handleNext} className="bg-primary text-primary-foreground hover:bg-primary/90">
              {step === steps.length - 1 ? "Start Assessment" : "Continue"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
