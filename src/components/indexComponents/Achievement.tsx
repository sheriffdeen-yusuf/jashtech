import React from "react";
import { GraduationCap, Video, Radiation } from "lucide-react";

function Achievement() {
  return (
    <div className="space-y-20">
      <div className="flex w-full items-center justify-between ">
        {/* side 1  */}
        <div className="flex gap-3 ">
          <div className="flex items-center justify-center rounded-xl bg-sky-200 px-2 ">
            <GraduationCap size={35} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">20</h1>
            <h2 className="mt-auto text-lg font-light text-stone-700">
              Instructor
            </h2>
          </div>
        </div>
        {/* side 2 */}
        <div className="flex gap-3 ">
          <div className="flex items-center justify-center rounded-xl bg-yellow-100 px-2 ">
            <Video size={35} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">300+ </h1>
            <h2 className="mt-auto text-lg font-light text-stone-700">video</h2>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="flex w-full items-center justify-between  ">
        {/* side 1  */}
        <div className="flex gap-3 ">
          <div className="flex items-center justify-center rounded-xl bg-pink-200 px-2 ">
            <GraduationCap size={35} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">2,000+</h1>
            <h2 className="mt-auto text-lg font-light text-stone-700">
              Students
            </h2>
          </div>
        </div>
        {/* side 2 */}
        <div className="flex gap-3 ">
          <div className="flex items-center justify-center rounded-xl bg-green-100 px-2 ">
            <Radiation size={35} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">600+ </h1>
            <h2 className="mt-auto text-lg font-light text-stone-700">users</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
