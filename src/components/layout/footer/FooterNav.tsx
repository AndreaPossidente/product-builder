// Components
import Link from "next/link";

// Hooks
import { useBuilder } from "@/hooks/useBuilder";

// Styles
import "./FooterNav.scss";

// Types
import { FooterNavProps, Step } from "@/types";

const FooterNav: React.FC<FooterNavProps> = ({ steps, currentStepId }) => {
  const {
    current: { selectedCar },
    showError,
  } = useBuilder();

  return (
    <nav className="cd-builder-secondary-nav">
      <ul>
        <li className="next nav-item">
          <ul>
            {steps &&
              steps.map((step: Step, index: number) => (
                <li
                  key={"step_next_" + step.id}
                  role={"step_next_" + step.id}
                  onClick={() =>
                    !selectedCar && showError("Please, select a model first!")
                  }
                  className={`${currentStepId >= step.id && "visible"} ${
                    currentStepId > step.id ? "visited" : ""
                  }`}
                >
                  <Link
                    href={
                      index < 3
                        ? !selectedCar
                          ? "#"
                          : steps[index + 1].path
                        : "#"
                    }
                  >
                    {index < 3 ? steps[index + 1].name : "Buy now"}
                  </Link>
                </li>
              ))}
          </ul>
        </li>
        <li className="prev nav-item">
          <ul>
            {steps &&
              steps.map((step: Step, index: number) => (
                <li
                  key={"step_prev_" + step.id}
                  className={`${currentStepId >= step.id && "visible"} ${
                    currentStepId > step.id ? "visited" : ""
                  }`}
                >
                  <Link href={step.id === 1 ? "#" : steps[index - 1].path}>
                    {step.id === 1 ? "" : steps[index - 1].name}
                  </Link>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export { FooterNav };
