import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { MoveUpRight } from "lucide-react";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { IconButton } from "@mui/material";
import { CourseCardPros } from "@/interfaces/ui.interface";

export default function CourseCard({
  tag,
  title,
  rating,
  price,
  url,
}: CourseCardPros) {
  return (
    <Card className="relative" sx={{ maxWidth: 365, minWidth: 280 }}>
      <CardMedia sx={{ height: 150 }} image={url} title={title} />
      <div className="absolute left-2 top-2 bg-white/50 px-2 py-1 font-bold text-stone-900">
        {tag}
      </div>
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {title}
        </Typography>
        <Typography
          className="flex items-center justify-between"
          variant="body2"
        >
          <Rating name="read-only" value={5} readOnly size="large" /> {rating}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between">
        <Typography variant="h6">$ {price}</Typography>
        <IconButton className="hover:bg-primary/60">
          <MoveUpRight />
        </IconButton>
      </CardActions>
    </Card>
  );
}
