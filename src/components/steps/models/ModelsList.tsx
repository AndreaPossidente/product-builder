// Components
import { ModelsListItem } from "./ModelsListItem";

// Hooks
import { useBuilder } from "@/hooks/useBuilder";

const ModelsList = () => {
  const {
    cars,
    current: { selectedCar },
  } = useBuilder();

  return (
    <ul className="models-list options-list cd-col-2">
      {cars &&
        cars.map((car) => (
          <ModelsListItem key={car.id} car={car} selectedCar={selectedCar} />
        ))}
    </ul>
  );
};

export { ModelsList };
