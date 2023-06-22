"use client";

// Components
import { Accessories, Colors, Models, Summary } from "@/components/steps";

// Hooks
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBuilder } from "@/hooks/useBuilder";

// Types
import { StepProps } from "@/types";
import Image from "next/image";

const Step: React.FC<StepProps> = ({ params: { step } }) => {
  // Get selected car if exists
  const {
    current: { selectedCar },
  } = useBuilder();

  // Redirect to Models Step if no car is selected
  const router = useRouter();
  useEffect(() => {
    if (!selectedCar) {
      router.push("/");
    }
  }, [selectedCar, router]);

  // If no car is selected show a loading spinner
  if (!selectedCar) {
    return (
      <div className="cd-loader">
        <Image
          src="/assets/svg/spinner.svg"
          width={100}
          height={100}
          alt="loading..."
        />
      </div>
    );
  } else {
    // Render the current step
    switch (step) {
      case "colors":
        return <Colors />;
      case "accessories":
        return <Accessories />;
      case "summary":
        return <Summary />;
      default:
        return <Models />;
    }
  }
};

export default Step;
