// Enum of all available Action Types
export enum BuilderActionType {
  setCar,
  setCars,
  setColor,
  toggleAccessory,
  setError,
}

// Type of all the possible action type and payload combinations
export type BuilderAction =
  | { type: BuilderActionType.setCar; payload: string | null } // Update payload type to string
  | { type: BuilderActionType.setCars; payload: Car[] | null }
  | { type: BuilderActionType.setColor; payload: Color }
  | { type: BuilderActionType.toggleAccessory; payload: Accessory }
  | { type: BuilderActionType.setError; payload: string | null };

// BuilderState Type
export interface BuilderState {
  cars: Car[] | null;
  selectedCar: Car | null;
  error: string | null;
}

/**
 * Check if the current state has a selected car.
 * Returns the current state or the state updated with an error if there is no selected car
 */
const checkForSelectedCar = (state: BuilderState): BuilderState => {
  if (state.selectedCar === null) {
    return {
      ...state,
      error: "Please select a model first!",
    };
  }
  return state;
};

/**
 * Reducer function for the Product Builder state
 * @param {BuilderState} state - The current state of the Builder.
 * @param {BuilderAction} action - The action object that describes the state update.
 * @returns {BuilderState} The new state after applying the action.
 */
export const builderReducer = (
  state: BuilderState,
  action: BuilderAction
): BuilderState => {
  switch (action.type) {
    /**
     * Set a new car as selectedCar and return the updated state
     */
    case BuilderActionType.setCar: {
      const foundCar = state.cars?.find((car) => car.id === action.payload);
      return {
        ...state,
        selectedCar: foundCar
          ? {
              ...foundCar,
              color: foundCar?.colors ? foundCar.colors[0] : null,
              colors: null,
              accessories: null,
            }
          : null,
        error: null,
      };
    }

    /**
     * Set cars and return the updated state
     */
    case BuilderActionType.setCars:
      return {
        ...state,
        cars: action.payload,
      };

    /**
     * Set color and return the updated state
     */
    case BuilderActionType.setColor:
      const { selectedCar } = checkForSelectedCar(state);
      return {
        ...state,
        selectedCar: { ...selectedCar, color: action.payload },
      } as BuilderState;

    /**
     * Set error and return the updated state
     */
    case BuilderActionType.setError:
      return {
        ...state,
        error: action.payload,
      };

    /**
     * Toggle accessory and return the updated state
     */
    case BuilderActionType.toggleAccessory: {
      const { selectedCar } = checkForSelectedCar(state);
      const { accessories } = selectedCar!;
      if (!accessories) {
        return {
          ...state,
          selectedCar: {
            ...selectedCar!,
            accessories: [action.payload],
          },
        };
      }
      const foundAccessoryIndex = accessories.findIndex(
        (a) => a.id === action.payload.id
      );
      if (foundAccessoryIndex !== -1) {
        return {
          ...state,
          selectedCar: {
            ...selectedCar!,
            accessories: accessories.filter(
              (_, index) => index !== foundAccessoryIndex
            ),
          },
        };
      }
      return {
        ...state,
        selectedCar: {
          ...selectedCar!,
          accessories: [...accessories, action.payload],
        },
      };
    }

    /**
     * If there is no action return the current state
     */
    default:
      return state;
  }
};
