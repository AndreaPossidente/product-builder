"use client";

// Libraries
import axios from "axios";

// Functions
import { Dispatch, createContext } from "react";

// Hooks
import { useContext, useEffect, useReducer } from "react";

// Reducers
import { BuilderState, builderReducer } from "../reducers/builderReducer";

// Enums
import { BuilderActionType } from "../reducers/builderReducer";

// Types
import { BuilderContextProviderProps } from "@/types";
import { type BuilderAction } from "../reducers/builderReducer";

// Define Product Builder initial state
const builderInitialState = {
  cars: null,
  selectedCar: null,
  error: null,
};

// Init Product Builder Context
const BuilderContext = createContext<BuilderState>(builderInitialState);

// Init Product Dispatcher Context
const BuilderDispatchContext = createContext<Dispatch<BuilderAction>>(
  () => undefined
);

/**
 * Initializes and provides the Product Builder Context for the application.
 * it manages the state and logic to handle a product configuration process.
 * @param {React.ReactNode} children - A prop for the child components to be wrapped within the BuilderContextProvider.
 */
export const BuilderContextProvider: React.FC<BuilderContextProviderProps> = ({
  children,
}) => {
  // Init state and dispatch of the builderReducer with the builderInitialState
  const [state, dispatch] = useReducer(builderReducer, builderInitialState);

  // Method to get all cars from the /api/cars endpoint
  const getAllCars = async () => {
    const { data } = await axios.get("/api/cars");
    dispatch({ type: BuilderActionType.setCars, payload: data });
  };

  // On init get all cars from the api
  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <BuilderContext.Provider value={state}>
      <BuilderDispatchContext.Provider value={dispatch}>
        {children}
      </BuilderDispatchContext.Provider>
    </BuilderContext.Provider>
  );
};

// Merge BuilderContext and BuilderDispatchContext in a single hook
export function useBuilderContext() {
  return [useContext(BuilderContext), useContext(BuilderDispatchContext)] as [
    BuilderState,
    Dispatch<BuilderAction>
  ];
}
