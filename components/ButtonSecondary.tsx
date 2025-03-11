"use client";
import { JSX } from "react";

type ButtonSecondaryProps = {
  text: string;
  href: string;
  darkMode: boolean;
};

const ButtonSecondary = ({ text, href, darkMode }: ButtonSecondaryProps): JSX.Element => {
  return (
    <a
      href={href}
      target="_blank"
      className={`px-6 py-3 rounded-full border transition ${
        darkMode
          ? "font-medium bg-white text-black border-black hover:opacity-80"
          : "font-medium bg-black text-white border-black hover:opacity-80"
      }`}
    >
      {text}
    </a>
  );
};

export default ButtonSecondary;
