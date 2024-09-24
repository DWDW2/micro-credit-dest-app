import { Calc } from "@/components/travel/Calc";
import { CalcRefactored } from "@/components/travel/Refactor";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <CalcRefactored />
    </div>
  );
}
