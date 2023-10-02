import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Index() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const settings = {
    // centerMode: true,
    // centerPadding: "60px",
    // className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    Description: "true",
    swipeToSlide: true,
    arrows: true,
    afterChange: (currentSlide, next) => {
      //   console.log(`Current slide: ${currentSlide}`);
      setCurrentIndex(next);
    },
    customPaging: function (i) {
      // Customize the rendering of each carousel indicator
      console.log(currentIndex);
      return (
        <button
          className={`h-4 w-4 rounded-full p-6 ${
            i === currentIndex ? "bg-red-600" : "bg-gray-400"
          }`}
        ></button>
      );
    },
  };
  //   const CustomArrow = ({ onClick, direction }) => (
  //     <button
  //       onClick={onClick || (() => {})}
  //       className={`absolute top-1/2 -translate-y-1/2 transform ${
  //         direction === "left" ? "left-4" : "right-4"
  //       } rounded-full bg-gray-300 p-2 transition duration-300 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400`}
  //     >
  //       {direction === "left" ? "<" : ">"}
  //     </button>
  //   );
  const LeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -bottom-4 right-8   transform rounded-full bg-gray-300 p-2 transition duration-300 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
    >
      {"<"}
    </button>
  );

  const RightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute -bottom-4 right-0 transform rounded-full bg-gray-300 p-2 transition duration-300 hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
    >
      {">"}
    </button>
  );
  return (
    <div className="mx-auto mt-10 w-[52rem] bg-white">
      <Slider
        {...settings}
        prevArrow={<LeftArrow />}
        nextArrow={<RightArrow />}
        className="relative p-10"
      >
        <div className="mr-14 h-40 w-28 bg-green-400 p-10 ">
          <h3>1</h3>
        </div>
        <div className="mr-14 h-40 w-28 bg-sky-600 p-10">
          <h3>2</h3>
        </div>
        <div className=" h-40 bg-purple-500 p-10">
          <h3>3</h3>
        </div>
        <div className="h-40 bg-red-500 p-10">
          <h3>4</h3>
        </div>
        <div className="h-40 bg-orange-700 p-10">
          <h3>5</h3>
        </div>
        <div className="h-40 bg-blue-400 p-10">
          <h3>6</h3>
        </div>
      </Slider>
      {/* <div className="carousel-indicator">
        {[...Array(6)].map((_, index) => (
          <span
            key={index}
            className={`indicator-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
}

export default Index;
