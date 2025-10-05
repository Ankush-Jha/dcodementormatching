"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code2, ArrowRight, ArrowLeft } from "lucide-react"
import { TechnicalSkillsForm } from "@/components/assessment/technical-skills-form"
import { LearningGoalsForm } from "@/components/assessment/learning-goals-form"
import { AvailabilityForm } from "@/components/assessment/availability-form"
import { LearningStyleForm } from "@/components/assessment/learning-style-form"
import { MentorProfileForm } from "@/components/mentor/mentor-profile-form"

export default function AssessmentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const role = (searchParams.get("role") === "mentor" ? "mentor" : "mentee") as "mentor" | "mentee"
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    technicalSkills: {},
    learningGoals: {},
    availability: {},
    learningStyle: {},
    mentorProfile: {}, // added for mentor
  })
  const menteeSteps = [
    {
      title: "Technical Skills",
      description: "Tell us about your programming experience and expertise",
      component: TechnicalSkillsForm,
    },
    {
      title: "Learning Goals",
      description: "What do you want to achieve through mentorship?",
      component: LearningGoalsForm,
    },
    {
      title: "Availability",
      description: "When are you available for mentoring sessions?",
      component: AvailabilityForm,
    },
    { title: "Learning Style", description: "How do you learn best?", component: LearningStyleForm },
  ]
  const mentorSteps = [
    { title: "Mentor Profile", description: "Set up how mentees see you", component: MentorProfileForm },
    { title: "Availability", description: "When are you available to mentor?", component: AvailabilityForm },
  ]
  const steps = role === "mentor" ? mentorSteps : menteeSteps
  const currentStep = steps[step]
  const progress = ((step + 1) / steps.length) * 100
  const CurrentFormComponent = steps[step].component as any

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      console.log("[v0] Assessment completed:", formData, "role:", role)
      if (role === "mentor") {
        router.push("/dashboard?role=mentor")
      } else {
        router.push("/matching")
      }
    }
  }

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const updateFormData = (section: string, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }))
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 text-foreground">{currentStep.title}</h1>
            <p className="text-lg text-muted-foreground">{currentStep.description}</p>
          </div>

          <Card className="p-8 bg-card border-border mb-8">
            <CurrentFormComponent
              data={
                role === "mentor"
                  ? step === 0
                    ? (formData as any).mentorProfile
                    : (formData as any).availability
                  : formData[
                      step === 0
                        ? "technicalSkills"
                        : step === 1
                          ? "learningGoals"
                          : step === 2
                            ? "availability"
                            : "learningStyle"
                    ]
              }
              onChange={(data: any) =>
                updateFormData(
                  role === "mentor"
                    ? step === 0
                      ? "mentorProfile"
                      : "availability"
                    : step === 0
                      ? "technicalSkills"
                      : step === 1
                        ? "learningGoals"
                        : step === 2
                          ? "availability"
                          : "learningStyle",
                  data,
                )
              }
            />
          </Card>

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
              {step === steps.length - 1 ? (role === "mentor" ? "Go to Dashboard" : "Find My Mentors") : "Continue"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
