import Cards from "@/components/travel/Cards";
import { CalcRefactored } from "@/components/travel/Refactor";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <CalcRefactored />
      <Cards />
    </div>
  );
}
