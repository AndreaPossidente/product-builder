export interface NavbarProps {
  steps: Step[];
  pathname: string;
}

export interface FooterNavProps {
  steps: Step[];
  currentStepId: number;
}

export interface ModelsListItemProps {
  car: Car;
  selectedCar: Car | null;
}

export interface AccessoriesListProps {
  accessories: Accessory[];
}

export interface AccessoriesListItemProps {
  accessory: Accessory;
}
