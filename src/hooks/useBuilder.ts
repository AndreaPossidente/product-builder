// Contexts
import { useBuilderContext } from "@/contexts/BuilderContext";

// Enums
import { BuilderActionType } from "@/reducers/builderReducer";

/**
 * Custom hook for managing the builder functionality.
 * @returns {Object} Object containing builder states and methods to update it.
 */
const useBuilder = () => {
  // Get current state and dispatch method from the BuilderContext and BuilderDispatchContext
  const [state, dispatch] = useBuilderContext();

  // Get all cars
  const cars = state.cars;
  // Get current selected car
  const selectedCar = state.selectedCar;

  // Get all available colors and accessories of the selected car
  const selectedCarData = cars?.find((car) => car.id === selectedCar?.id);
  const colors = selectedCarData?.colors;
  const accessories = selectedCarData?.accessories;

  // Get the error message (string | null)
  const error = state.error;

  // An object containing current selected car and related available colors and accessories
  const current = {
    selectedCar,
    availableColors: colors,
    availableAccessories: accessories,
  };

  // Method to show an alert with an error message
  const showError = (message: string): void => {
    dispatch({ type: BuilderActionType.setError, payload: message });
  };

  // Method to select a car and store it into the selected car state
  const selectCar = (carId: string | null): void => {
    dispatch({ type: BuilderActionType.setCar, payload: carId });
  };

  // Method to select a color and store it into the selected color state
  const selectColor = (color: Color): void => {
    dispatch({ type: BuilderActionType.setColor, payload: color });
  };

  // Method to toogle (select/deselect) an accessory updating the selected accessory state
  const toggleAccessory = (accessory: Accessory): void => {
    dispatch({ type: BuilderActionType.toggleAccessory, payload: accessory });
  };

  return {
    cars,
    current,
    error,
    selectCar,
    selectColor,
    toggleAccessory,
    showError,
  };
};

export { useBuilder };
