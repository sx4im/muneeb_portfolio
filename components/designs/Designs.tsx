import Image from "next/image";
import React from "react";
import { designs } from "@/data/content/designs";

function Designs() {
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 w-full">
      {designs.map((design) => (
        <a
          key={design.label}
          href={design.link}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-fun-gray/40 hover:border-fun-pink transition-colors overflow-hidden bg-fun-gray-dark"
        >
          <div className="relative w-full h-64 sm:h-72 bg-fun-black">
            <Image
              src={design.img}
              alt={design.label}
              layout="fill"
              objectFit="cover"
              priority={false}
            />
          </div>
          <div className="px-5 py-4 flex items-center justify-between">
            <p className="font-semibold text-base sm:text-lg">
              {design.label}
            </p>
            <span className="text-xs uppercase tracking-wider text-fun-pink">
              View
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Designs;

