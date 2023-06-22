"use client";

// Components
import { ModelsList } from "./ModelsList";

// Hooks
import { useStepper } from "@/hooks/useStepper";

// Styles
import "./Models.scss";

const Models = () => {
  const { currentStepId, previousStepId, steps } = useStepper();

  return (
    <section
      data-selection="models"
      className={`builder-step ${
        currentStepId === 1 ? "active" : "move-left"
      } ${currentStepId < previousStepId ? "back" : ""}`}
    >
      <div className="cd-step-content">
        <header>
          <h1>Select Model</h1>
          <span className="steps-indicator">
            Step <b>{currentStepId}</b> of {steps.length}
          </span>
        </header>
        <a
          href="https://codyhouse.co/gem/product-builder"
          className="cd-nugget-info hide-on-desktop"
        >
          Article &amp; Download
        </a>
        <ModelsList />
      </div>
    </section>
  );
};

export { Models };
