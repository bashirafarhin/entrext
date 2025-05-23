import React from "react";
import TextAnimation from "./Animations/TextAnimation";



const Whatwedo = () => {
  return (
    <>
    <div className="text-center w-[70vw] mx-auto my-50 heading">
      <div>
        <TextAnimation text={"what Entrext do?"}/>
      </div>
      <div>
        <TextAnimation
          initialColor="gray"
          text={
            "We find everyday problems that real people face—like finding parking, social media for experience, text based games, managing time, or shopping easier—and we build tech products to fix them."
          }
        />
      </div>
    </div>
    </>
  );
};

export default Whatwedo;
