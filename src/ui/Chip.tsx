import React from "react";

function Chip({text}: {text: string}) {
  return (
    <div className="text-neutral-200 rounded-full leading-5 flex items-center border px-4 py-1 border-neutral-200/50 font-medium text-xs">
      {text}
    </div>
  );
}

export default Chip;
