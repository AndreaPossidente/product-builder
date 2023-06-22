"use client";

// Components
import Image from "next/image";

// Hooks
import { useStepper } from "@/hooks/useStepper";
import { useBuilder } from "@/hooks/useBuilder";

// Styles
import "./Summary.scss";

const Summary = () => {
  const { currentStepId, steps } = useStepper();

  const {
    current: { selectedCar },
  } = useBuilder();

  return (
    <section
      data-selection="summary"
      className={`builder-step ${currentStepId === 4 ? "active" : ""}`}
    >
      <div className="cd-step-content">
        <header>
          <h1>Summary</h1>
          <span className="steps-indicator">
            Step <b>{currentStepId}</b> of {steps.length}
          </span>
        </header>
        <ul className="summary-list">
          <li>
            <h2>Model</h2>
            {selectedCar?.color?.image && (
              <Image
                src={selectedCar.color.image}
                alt={selectedCar?.manufacturer + " " + selectedCar?.model}
                className="product-preview"
                width={700}
                height={332.5}
                style={{ width: "100%", height: "100%" }}
              />
            )}
            <h3>{selectedCar?.manufacturer + " " + selectedCar?.model}</h3>
            <p>{selectedCar?.description}</p>
          </li>
          <li data-summary="colors">
            <h2>Color</h2>
            <span className="summary-color">
              <em
                className="color-swatch"
                data-color={selectedCar?.color?.color}
              ></em>
              <em className="color-label">
                {selectedCar?.color?.name} - {selectedCar?.color?.currency}
                {selectedCar?.color?.price.toLocaleString("it")}
              </em>
            </span>
          </li>
          <li data-summary="accessories">
            <h2>Accessories</h2>
            <ul className="summary-accessories">
              {selectedCar?.accessories &&
                selectedCar.accessories.map((accessory) => (
                  <li key={accessory.id}>
                    <p>{accessory.name}</p>
                  </li>
                ))}
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Summary };
