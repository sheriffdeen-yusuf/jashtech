import React from "react";

function IconButton({ className, children, ...props }: any) {
  return (
    <button className={`${className} rounded-md px-1  hover:bg-stone-300`}>
      {children}
    </button>
  );
}

export default IconButton;
