import React, { FC } from "react";
export interface CourseCardPros {
  tag: string;
  title: string;
  rating: number;
  price: number;
  url: string;
}

export interface InstructorCardPros {
  name: string;
  title: string;
  url: string;
}

export interface CategoryTagProps {
  icon: React.ReactNode;
  tag: string;
}
