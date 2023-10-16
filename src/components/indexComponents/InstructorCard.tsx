import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { InstructorCardPros } from "@/interfaces/ui.interface";

function InstructorCard({ name, title, url }: InstructorCardPros) {
  return (
    <Card className="relative" sx={{ maxWidth: 365, minWidth: 250, p: 1 }}>
      <CardMedia sx={{ height: 290 }} image={url} title={name} />
      <CardContent className="text-center">
        <Typography
          gutterBottom
          variant="body2"
          component="h6"
          className="text-lg font-semibold"
        >
          {name}
        </Typography>
        <Typography className="" variant="body2">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InstructorCard;
