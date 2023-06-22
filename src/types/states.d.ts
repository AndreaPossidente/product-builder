export interface Step {
  id: number;
  name: "Models" | "Colors" | "Accessories" | "Summary";
  path: string;
}

export type StepperState = {
  steps: Step[];
  previousStepId: number;
  currentStepId: number;
  setStep: (stepId: number) => void;
};
