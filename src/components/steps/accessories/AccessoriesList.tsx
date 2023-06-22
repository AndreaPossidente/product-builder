// Components
import { AccessoriesListItem } from "./AccessoriesListItem";

// Types
import { AccessoriesListProps } from "@/types";

const AccessoriesList: React.FC<AccessoriesListProps> = ({ accessories }) => {
  return (
    <ul className="accessories-list options-list">
      {accessories &&
        accessories.map((accessory) => (
          <AccessoriesListItem key={accessory.id} accessory={accessory} />
        ))}
    </ul>
  );
};

export { AccessoriesList };
