import React from "react";

type Prop = {
  text: string;
};

function Label({ text }: Prop) {
  return (
    <div className="flex justify-center items-center">
      <span className="text-sm text-neutral-200/80 uppercase tracking-widest font-medium">{text}</span>
    </div>
  );
}

export default Label;
