// Hooks
import { useContext } from "react";

// Contexts
import { StepperContext } from "@/contexts/StepperContext";

/**
 * Custom hook for managing stepper functionality.
 * @returns {Object} Object containing stepper state and navigation methods.
 */
const useStepper = () => {
  // Init Stepper context
  const { steps, currentStepId, previousStepId, setStep } =
    useContext(StepperContext);

  return {
    currentStepId,
    previousStepId,
    steps,
    setStep,
  };
};
export { useStepper };
