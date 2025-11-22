import React from "react";

function Heading() {
  return (
    <div className="py-12 sm:py-20 w-full text-center relative">
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-6 relative">
        Designs
        <img
          className="sqD w-8 -top-6 -right-6 absolute"
          src="/static/doodles/hero/paintbrush.svg"
          alt=""
        />
      </h1>
      <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
        A collection of UI explorations, landing pages, and product concepts
        that I have shared across the web.
      </p>
    </div>
  );
}

export default Heading;


