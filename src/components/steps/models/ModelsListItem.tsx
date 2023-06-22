"use client";

// Components
import Image from "next/image";

// Hooks
import { useBuilder } from "@/hooks/useBuilder";

// Types
import { ModelsListItemProps } from "@/types";

const ModelsListItem: React.FC<ModelsListItemProps> = ({
  car,
  selectedCar,
}) => {
  const { selectCar } = useBuilder();

  return (
    <li
      className={`js-option js-radio loaded ${
        car.id === selectedCar?.id ? "selected" : ""
      }`}
      data-price={car.price}
      data-model={car.id}
      onClick={() =>
        selectedCar?.id === car.id ? selectCar(null) : selectCar(car.id)
      }
    >
      <span className="name">
        {car.manufacturer} {car.model}
      </span>
      <Image
        src={car.defaultImage}
        alt={car.manufacturer + " " + car.model}
        width={374}
        height={178}
        style={{ width: "100%", height: "100%" }}
      />
      <span className="price">
        from {car.currency}
        {car.price.toLocaleString("it")}
      </span>
      <div className="radio"></div>
    </li>
  );
};

export { ModelsListItem };
