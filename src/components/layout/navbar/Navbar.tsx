"use client";

import Link from "next/link";

// Hooks
import { useBuilder } from "@/hooks/useBuilder";

// Types
import { NavbarProps } from "@/types";

// Styles
import "./Navbar.scss";

const Navbar: React.FC<NavbarProps> = ({ steps, pathname }) => {
  const {
    current: { selectedCar },
    showError,
  } = useBuilder();
  return (
    <nav className={`cd-builder-main-nav ${!selectedCar ? "disabled" : ""}`}>
      <ul>
        {steps.map((step) => (
          <li
            key={`step_${step.id}`}
            className={pathname === step.path ? "active" : ""}
          >
            <Link
              href={!selectedCar && step.id > 1 ? "#" : step.path}
              onClick={() =>
                !selectedCar &&
                step.id > 1 &&
                showError("Please, select a model first!")
              }
            >
              {step.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Navbar };
