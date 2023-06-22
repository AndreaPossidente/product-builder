"use client";

// Components
import { AccessoriesList } from "./AccessoriesList";

// Hooks
import { useStepper } from "@/hooks/useStepper";
import { useBuilder } from "@/hooks/useBuilder";

// Styles
import "./Accessories.scss";

const Accessories = () => {
  const { currentStepId, previousStepId, steps } = useStepper();
  const {
    current: { selectedCar, availableAccessories },
  } = useBuilder();

  if (selectedCar) {
    return (
      <section
        data-selection="accessories"
        className={`builder-step ${currentStepId === 3 ? "active" : ""} ${
          currentStepId < previousStepId ? "back" : ""
        } ${currentStepId > 3 ? "move-left" : ""}`}
      >
        <div className="cd-step-content">
          <header>
            <h1>Accessories</h1>
            <span className="steps-indicator">
              Step <b>{currentStepId}</b> of {steps.length}
            </span>
          </header>
          {availableAccessories && (
            <AccessoriesList accessories={availableAccessories} />
          )}
        </div>
      </section>
    );
  } else {
  }
};

export { Accessories };
