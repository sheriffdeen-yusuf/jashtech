import { CategoryTagProps } from "@/interfaces/ui.interface";
import { IconButton } from "@mui/material";
import { MoveUpRight, PenTool } from "lucide-react";
import React from "react";

function CategoryTag({ icon, tag }: CategoryTagProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-stone-300 px-2 py-1  hover:border-red-700   ">
      <div className="flex gap-2">
        {icon}
        <h1>{tag}</h1>
      </div>
      <IconButton className="hover:bg-primary/25">
        <MoveUpRight />
      </IconButton>
    </div>
  );
}

export default CategoryTag;
