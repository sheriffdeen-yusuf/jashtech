import React from "react";
import SocialLinks from "../Ui/SocialLinks";
import Button from "../Ui/Button";

function Footer() {
  return (
    <footer className="grid-col-1 grid gap-8  px-10 py-12 md:grid-cols-4 md:px-40">
      <div>
        <h1 className="text-3xl font-extrabold italic ">
          <span className="text-primary">jash</span>tech
        </h1>
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <ul className="my-2 text-stone-700">
          <li>Call : +234 9030047543 </li>
          <li>Jastech@gmail.com</li>
          <SocialLinks />
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Explore</h2>
        <ul className="my-2 text-stone-700">
          <li>Home </li>
          <li>About</li>
          <li>Course</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Category</h2>
        <ul className="my-2 text-stone-700">
          <li>Design </li>
          <li>Development</li>
          <li>Marketing</li>
          <li>Business</li>
          <li>Lifestyle</li>
          <li>Photography</li>
          <li>Music</li>
        </ul>
      </div>
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">subscribe</h2>
        <p className="my-2 text-stone-700">
          Subscribe to our news letter and be the first to get amazing discounts
          news from us!
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Email here"
            className="w-full rounded-md bg-stone-200 px-6 py-2 shadow-md outline-none placeholder:text-stone-700 focus:border focus:border-primary"
          />
        </div>
        <Button type="primary">Subscribe Now</Button>
      </div>
    </footer>
  );
}

export default Footer;
