"use client";

// Hooks
import { useEffect, useState } from "react";

// Functions
import { createContext } from "react";

// Types
import { Step, StepperContextProviderProps, StepperState } from "@/types";
import { usePathname } from "next/navigation";

// Init Stepper Context
export const StepperContext = createContext<StepperState>({
  steps: [],
  previousStepId: 1,
  currentStepId: 1,
  setStep: (stepId: number) => undefined,
});

/**
 * Initializes and provides the Stepper Context for the application.
 * it manages the state and logic for a multi-step process.
 * @param {React.ReactNode} children - A prop for the child components to be wrapped within the StepperContextProvider.
 */
export const StepperContextProvider: React.FC<StepperContextProviderProps> = ({
  children,
}) => {
  // Init states for previous and current steps ids with the value 1 (1 = Models step)
  const [previousStepId, setPreviousStepId] = useState<number>(1);
  const [currentStepId, setCurrentStepId] = useState<number>(1);

  // An array of Steps, it is not a state because they'll never change
  const steps: Step[] = [
    { id: 1, name: "Models", path: "/" },
    { id: 2, name: "Colors", path: "/colors" },
    { id: 3, name: "Accessories", path: "/accessories" },
    { id: 4, name: "Summary", path: "/summary" },
  ];

  // Get current pathname
  const pathname = usePathname();

  // Method to set the previous and current step with one call
  const setStep = (stepId: number): void => {
    setCurrentStepId((prev) => {
      setPreviousStepId(prev);
      return stepId;
    });
  };

  // On init and if pathname changes execute side effect
  useEffect(() => {
    // Get the current step
    const current = steps?.find((step) => step.id === currentStepId);
    // Get the new step by pathname
    const newStep = steps?.find((step) => step.path === pathname);
    // if the pathname is different from the current step pathname and new step exists
    if (current?.path !== pathname && newStep) {
      // if currentStep is different from newStep set the current step to the new one
      currentStepId !== newStep.id && setStep(newStep.id);
    }
  }, [pathname]);

  // An object containing the current states and a method to update them
  const value: StepperState = {
    steps,
    previousStepId,
    currentStepId,
    setStep,
  };

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  );
};
