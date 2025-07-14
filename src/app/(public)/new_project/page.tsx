"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { FormDescriptionStep } from "./_components/form-description-step";
import { FormProjectStep } from "./_components/form-project-step";
import { type Project, projects } from "./projects";

export default function NewProjectPage() {
  const [formLoading, setFormLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const router = useRouter();
  const totalSteps = 2;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <main className="max-w-5xl mx-auto py-8 space-y-4 px-4">
      <div className="w-full max-w-xl mb-8 mx-auto">
        <div className="w-full bg-accent rounded-full h-2.5">
          <div
            className="bg-purple-400 h-2.5 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-2">
          Passo {currentStep} de {totalSteps}
        </p>
      </div>

      {currentStep === 1 && (
        <FormProjectStep
          onProjectSelect={setSelectedProject}
          selectedProject={selectedProject}
          handleNext={handleNext}
        />
      )}

      {currentStep === 2 && (
        <FormDescriptionStep
          selectedProject={selectedProject}
          handleBack={handleBack}
          isLoading={formLoading}
          handleSubmit={(data) => {
            if (!selectedProject) return;
            setFormLoading(true);
            fetch("/api/send-mail", {
              method: "POST",
              body: JSON.stringify({
                ...data,
                projectTitle: selectedProject.title,
              }),
            })
              .then(() => {
                toast("Seu email foi enviado! Em breve entraremos em contato.");
                setTimeout(() => {
                  router.push("/");
                }, 3000);
              })
              .catch((e) => {
                console.error(e);
                toast(
                  "Infelizmente algo deu errado. Por favor tente novamente mais tarde.",
                );
              })
              .finally(() => {
                setFormLoading(false);
              });
          }}
        />
      )}
    </main>
  );
}
