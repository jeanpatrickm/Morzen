"use client";

import { useState } from "react";
import { FormDescriptionStep } from "./_components/form-description-step";
import { FormProjectStep } from "./_components/form-project-step";
import { Project } from "./projects";

export default function NewProjectPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    undefined,
  );
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
    <main className="max-w-5xl mx-auto py-8 space-y-4">
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
      {/* Renderização Condicional dos Passos */}
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
          handleSubmit={(data) => {
            console.log(selectedProject, data);
          }}
        />
      )}
    </main>
  );
}
