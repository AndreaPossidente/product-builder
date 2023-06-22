"use client";

// Hooks
import { useBuilder } from "@/hooks/useBuilder";

// Types
import { AccessoriesListItemProps } from "@/types";

const AccessoriesListItem: React.FC<AccessoriesListItemProps> = ({
  accessory,
}) => {
  const {
    current: { selectedCar },
    toggleAccessory,
  } = useBuilder();

  return (
    <li
      className={`js-option ${
        selectedCar?.accessories?.find((acc) => acc.id === accessory.id) !==
        undefined
          ? "selected"
          : ""
      }`}
      data-price={accessory.price}
      onClick={() => toggleAccessory(accessory)}
    >
      <p>{accessory.name}</p>
      <span className="price">
        {accessory.currency}
        {Number(accessory.price).toLocaleString("it")}
      </span>
      <div className="check"></div>
    </li>
  );
};

export { AccessoriesListItem };
