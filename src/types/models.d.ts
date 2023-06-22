interface Color {
  id: string;
  name: string;
  color: string;
  image: string;
  price: number;
  currency: string;
}

interface Accessory {
  id: string;
  name: string;
  price: number;
  currency: string;
}

interface Car {
  id: string;
  manufacturer: string;
  defaultImage: string;
  model: string;
  price: number;
  currency: string;
  description: string;
  color?: Color | null;
  colors?: Color[] | null;
  accessories?: Accessory[] | null;
}
