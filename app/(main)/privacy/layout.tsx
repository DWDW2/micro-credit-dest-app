import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return <div className="max-w-6xl mx-auto">{children}</div>;
}
