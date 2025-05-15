"use client";
import Image from "next/image";
import React from "react";
import TextAnimation from "./Animations/TextAnimation";

const prod = [
  {
    name: "Friendsin",
    title1: "Find Study Buddies",
    title2: "Master Subjects Together",
    desc: "Matches you with students who can help you study the subjects you're stuck on.",
    img1: "/whiteLogo.png",
    img2: "/logo.png",
  },
  {
    name: "SecretSanta",
    title1: "Suggest Secret Gifts",
    title2: "Vote and Pool Money",
    desc: "Friends anonymously suggest and vote on the perfect present while pooling money.",
    img1: "/whiteLogo.png",
    img2: "/logo.png",
  },
  {
    name: "Borrowd",
    title1: "Rent Your Stuff",
    title2: "Borrow What You Need",
    desc: "A platform to rent out your unused stuff or borrow what you need.",
    img1: "/whiteLogo.png",
    img2: "/logo.png",
  },
  {
    name: "Dare",
    title1: "Monthly Fun Challenges",
    title2: "Win a Big Year-End Trip",
    desc: "A game where you and your friends complete monthly challenges to win a big trip at the end of the year.",
    img1: "/whiteLogo.png",
    img2: "/logo.png",
  },
  {
    name: "Herth",
    title1: "Support Women Creators",
    title2: "Shop Handmade Goods",
    desc: "A community where women sell their handmade goods and support each other globally.",
    img1: "/whiteLogo.png",
    img2: "/logo.png",
  },
  {
    name: "Leaderbase",
    title1: "Hire Fractional CTOs",
    title2: "Startup Tech Leadership",
    desc: "Startups hire experienced tech executives by the hour for guidance.",
    img1: "/whiteLogo.png",
    img2: "/logo.png",
  },
];


const ProductsInMaking = () => {
  return (
    <>
      <div className="w-[40vw] mx-auto my-20">
        <div className="heading text-center my-10"><TextAnimation text="Products in making"/></div>

        <div className="flex flex-col items-center gap-8">
          {prod.map((ele, ind) => {
            return (
              <div
                key={ind}
                className="group bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-9 rounded-2xl border border-gray-500 flex flex-col items-center text-center"
              >
                <div className="relative w-full flex flex-col items-center text-center px-6 py-5">
                  <div className="group-hover:bg-blue-400 bg-white transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-black group-hover:text-white mb-1">
                    {ele.name}
                  </div>
                  <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                    {ele.title1}
                  </span>
                  <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                    {ele.title2}
                  </span>
                  <p className="text-sm text-slate-500">{ele.desc}</p>
                </div>

                <div className="relative h-[240px] w-[350px] flex justify-center items-center group-hover:-translate-y-2 transition-transform duration-500 ease-in-out">
                  <div className="absolute inset-0 flex justify-center items-center">
                    <Image
                      className="group-hover:opacity-0 transition-opacity duration-500 object-cover"
                      src={ele.img2}
                      width={350}
                      height={240}
                      alt="Card image 01"
                    />
                  </div>
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Image
                      className="object-cover"
                      src={ele.img1}
                      width={350}
                      height={240}
                      alt="Card image 01 displaying on hover"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="font-semibold text-xl text-center text-gray-500 mt-7">
          more coming soon...
        </div>
      </div>
    </>
  );
};


export default ProductsInMaking;
