import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
  fallback: ["sans serif"],
});

export { lato };
