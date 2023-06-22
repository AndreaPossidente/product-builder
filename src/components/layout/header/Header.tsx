"use client";

// Components
import { Navbar } from "../navbar";

// Hooks
import { usePathname } from "next/navigation";
import { useStepper } from "@/hooks/useStepper";

// Styles
import "./Header.scss";

const Header = () => {
  const pathname = usePathname();
  const { steps } = useStepper();

  return (
    <header className="main-header">
      <h1>Product Builder</h1>
      <Navbar pathname={pathname} steps={steps} />
      <a
        href="https://codyhouse.co/gem/product-builder"
        className="cd-nugget-info hide-on-mobile"
      >
        Article &amp; Download
      </a>
    </header>
  );
};

export { Header };
