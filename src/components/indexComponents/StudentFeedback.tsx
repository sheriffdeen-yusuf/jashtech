import Image from "next/image";
import React from "react";

function StudentFeedback() {
  return (
    <div className="grid-col-1 my-8  grid gap-8 md:grid-cols-2">
      {/* card 1 */}
      <div className="space-y-4 rounded-2xl px-8 py-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Image
              src={"/p1.png"}
              width={70}
              height={70}
              alt="person"
              className="rounded-full"
            />
            <div className="space-y-2">
              <h1 className="text-lg font-semibold">Jenny Wilson</h1>
              <p className=""> Web Developer</p>
            </div>
          </div>
          <Image src={"/quote.svg"} width={50} height={50} alt="qutoe" />
        </div>
        <p>
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
          Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent
          nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
        </p>
        <p>
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
          Nam sed imperdiet turpis. In hac habitasse platea dictumst.
        </p>
      </div>
      {/* card 2 */}
      <div className="space-y-4 rounded-2xl px-8 py-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Image
              src={"/p3.png"}
              width={70}
              height={70}
              alt="person"
              className="rounded-full"
            />
            <div className="space-y-2">
              <h1 className="text-lg font-semibold">Guy Hawkins</h1>
              <p className=""> UI-UX Designer</p>
            </div>
          </div>
          <Image src={"/quote.svg"} width={50} height={50} alt="qutoe" />
        </div>
        <p>
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
          Nam sed imperdiet turpis. In hac habitasse platea dictumst. Praesent
          nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.
        </p>
        <p>
          Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra.
          Nam sed imperdiet turpis. In hac habitasse platea dictumst.
        </p>
      </div>
    </div>
  );
}

export default StudentFeedback;
