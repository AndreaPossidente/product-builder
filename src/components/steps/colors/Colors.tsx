"use client";

// Hooks
import { useStepper } from "@/hooks/useStepper";
import { useBuilder } from "@/hooks/useBuilder";

// Styles
import "./Colors.scss";
import Image from "next/image";

const Colors = () => {
  const { currentStepId, previousStepId, steps } = useStepper();

  const {
    selectColor,
    current: { selectedCar, availableColors },
  } = useBuilder();

  return (
    <section
      data-selection="colors"
      className={`builder-step ${currentStepId === 2 ? "active" : ""} ${
        currentStepId < previousStepId ? "back" : ""
      } ${currentStepId > 2 ? "move-left" : ""}`}
    >
      <div className="cd-step-content">
        <header>
          <h1>Select Color</h1>
          <span className="steps-indicator">
            Step <b>{currentStepId}</b> of {steps.length}
          </span>
        </header>
        <ul className="cd-product-previews">
          {selectedCar &&
            availableColors &&
            availableColors.map((color) => (
              <li
                key={color.id}
                className={
                  selectedCar?.color?.id === color.id ? "selected" : ""
                }
              >
                <Image
                  src={
                    (selectedCar?.color?.image && selectedCar.color.image) ||
                    selectedCar.defaultImage
                  }
                  alt="Product Preview"
                  className="product-preview"
                  width={750}
                  height={356.25}
                  style={{ width: "100%", height: "100%" }}
                />
              </li>
            ))}
        </ul>
        <ul className="cd-product-customizer">
          {selectedCar &&
            availableColors &&
            availableColors.map((color) => (
              <li
                key={color.id}
                onClick={() => selectColor(color)}
                data-content={`${color.name} - ${color.currency}${color.price}`}
                data-price={color.price}
                className={
                  selectedCar?.color?.id === color.id ? "selected" : ""
                }
              >
                <a data-color={color.color} href="#0">
                  {color.name} - {color.currency}
                  {color.price}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export { Colors };
