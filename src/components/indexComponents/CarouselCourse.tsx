import React, { useState } from "react";
import CourseCard from "../Ui/CourseCard";
import courselItem from "@/constants/courseCardData";

function CarouselCourse() {
  return (
    <>
      <div className=" flex flex-col  gap-4  md:flex-row">
        {courselItem.map((item, idx) => (
          <CourseCard
            key={idx}
            tag={item.tag}
            title={item.title}
            rating={item.rating}
            price={item.price}
            url={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default CarouselCourse;
