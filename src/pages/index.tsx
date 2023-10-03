import Header from "@/components/layout/Header";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button, { OutlineButton } from "@/components/Ui/Button";
import { IconButton } from "@mui/material";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import CarouselCourse from "@/components/indexComponents/CarouselCourse";
import { Line, SmallStar, Star } from "@/constants/svgs";
import tags from "@/constants/popularCategoryTags";
import instructors from "@/constants/instructorCard";
import CategoryTag from "@/components/indexComponents/CategoryTag";
import InstructorCard from "@/components/indexComponents/InstructorCard";
import Achievement from "@/components/indexComponents/Achievement";
import StudentFeedback from "@/components/indexComponents/StudentFeedback";
import Footer from "@/components/layout/Footer";

function Index() {
  return (
    <div className="">
      <Header />
      <div className="my-20 grid grid-cols-2 gap-6 px-40 ">
        <div className="space-y-8">
          <h1 className="font-normal uppercase text-primary ">
            start to success
          </h1>
          <p className="text-5xl font-semibold capitalize text-stone-900">
            want to transform your <span className="text-primary">TECH</span>{" "}
            career or get started in the{" "}
            <span className="text-primary">TECH</span> industry
          </p>
          <div className="flex items-center justify-between">
            <Button type="pMedium">get started in tech</Button>
            <Button type="pMedium">improve your skills</Button>
          </div>
          {/* search */}
          <div className="relative">
            <input
              type="text"
              placeholder="what did you want to learn ? "
              className="w-full rounded-md px-6 py-4 shadow-md outline-none placeholder:text-stone-700 focus:border focus:border-primary"
            />
            <IconButton className="absolute right-3 top-2">
              <Search size={25} strokeWidth={2} />
            </IconButton>
          </div>
        </div>
        <div>
          <Image
            src="/woman.svg"
            alt="woman svg"
            height={300}
            width={399}
            className="mx-auto rounded-full bg-primary py-8"
          />
        </div>
      </div>
      {/* most popular course */}
      <div className="grid grid-cols-4 bg-stone-200 px-40 py-16">
        <h2 className="text-6xl font-semibold capitalize text-stone-900">
          Most{" "}
          <span className="text-primary">
            Popular <Line /> Course
          </span>
        </h2>
        <div className="col-span-3 ">
          <CarouselCourse />
        </div>
      </div>
      {/* most popular category */}
      <div className="px-40 py-12">
        <h2 className="text-3xl font-semibold capitalize text-stone-900">
          Most{" "}
          <span className="text-primary">
            Popular Categorys <Line />
          </span>
        </h2>
        <p className="text-lg text-stone-800">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div className="grid-col-2 my-8 grid gap-7 md:grid-cols-4">
          {tags.map((item, idx) => (
            <CategoryTag key={idx} icon={item.icon} tag={item.tag} />
          ))}
        </div>
      </div>
      {/* best instructors */}
      <div className="  bg-stone-200 px-40 py-12">
        <h2 className="text-3xl font-semibold capitalize text-stone-900">
          Our{" "}
          <span className="text-primary">
            Best Instructor <Line />
          </span>
        </h2>
        <p className="text-lg text-stone-800">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div className="grid-col-1 my-8 grid gap-4 md:grid-cols-4">
          {instructors.map((instructor, idx) => (
            <InstructorCard
              key={idx}
              name={instructor.name}
              title={instructor.title}
              url={instructor.picture}
            />
          ))}
        </div>
      </div>
      {/* our achvement  */}
      <div className=" px-40 py-12">
        <h2 className="text-3xl font-semibold capitalize text-stone-900">
          Our{" "}
          <span className="text-primary">
            Achievement <Line />
          </span>
        </h2>
        <p className="text-lg text-stone-800">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div className="grid-col-1 my-8  grid gap-8 md:grid-cols-2">
          <Achievement />
          <div className="mx-auto -mt-20 hidden md:block">
            <SmallStar />
            <Image src={"/rectangle.svg"} alt="box" width={300} height={200} />
            <Star />
          </div>
        </div>
      </div>

      {/*  student feedback */}
      <div className="  px-40 py-12">
        <h2 className="text-3xl font-semibold capitalize text-stone-900">
          Student{" "}
          <span className="text-primary">
            Feedback <Line />
          </span>
        </h2>
        <p className="text-lg text-stone-800">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <StudentFeedback />
      </div>
      {/*     Hello Beginner */}
      <div className="  grid-col-1  my-8 grid gap-4 bg-stone-200 px-40 py-12 md:grid-cols-2">
        <Image src="/woman2.svg" alt="woman" width={400} height={300} />
        <div className="flex flex-col items-center justify-center gap-3">
          <h2 className="text-3xl font-semibold capitalize text-stone-900">
            Hello{" "}
            <span className="text-primary">
              Beginner, <Line />
            </span>
          </h2>
          <p className="text-lg ">
            You are about to write your first line of code.
          </p>
          <div className="flex gap-4">
            <OutlineButton className="rounded-lg border-red-300 bg-stone-100">
              Continue course
            </OutlineButton>
            <Button
              type="pMedium"
              className="rounded-lg bg-black text-red-500 hover:bg-black/25"
            >
              Check other courses
            </Button>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Index;
