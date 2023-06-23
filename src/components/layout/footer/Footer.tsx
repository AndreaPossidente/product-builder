"use client";

// Components
import Image from "next/image";
import { FooterNav } from "./FooterNav";

// Hooks
import { useEffect, useState } from "react";

// Styles
import "./Footer.scss";
import { Step } from "@/types";
import { useBuilder } from "@/hooks/useBuilder";
import { useStepper } from "@/hooks/useStepper";

const Footer = () => {
  const {
    current: { selectedCar },
    error,
  } = useBuilder();
  const { currentStepId, steps } = useStepper();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const basePrice = selectedCar?.price || 0;
    const colorPrice = selectedCar?.color?.price || 0;
    const accessoriesPrice =
      selectedCar?.accessories?.reduce((prev, cur) => prev + cur.price, 0) || 0;
    setTotalPrice(basePrice + colorPrice + accessoriesPrice);
  }, [selectedCar]);

  return (
    <footer
      className={`cd-footer ${
        !selectedCar ? "disabled" : ""
      } step-${currentStepId} ${error ? "show-alert" : ""}`}
    >
      <div className="selected-product">
        <Image
          className={!selectedCar ? "disabled" : ""}
          width={169.2}
          height={80.362}
          src={
            selectedCar?.color?.image || "/assets/images/product01_col01.jpg"
          }
          alt="Product preview"
        />
        <div className="tot-price">
          <span>Total</span>
          <span className="total">
            $<b>{totalPrice}</b>
          </span>
        </div>
      </div>
      <FooterNav steps={steps} currentStepId={currentStepId} />
      <span role="alert" className="alert">
        {error}
      </span>
    </footer>
  );
};

export { Footer };
