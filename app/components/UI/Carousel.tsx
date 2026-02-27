"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  Images: string[] | undefined;
}

export default function Carousel({ Images }: Props) {
  const [current, setCurrent] = useState(0);

  if (!Images || Images.length === 0) return null;

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === Images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full h-56 md:h-96 rounded-xl overflow-hidden">
      <Image
        src={Images[current]}
        alt={`image-${current}`}
        fill
        className="object-cover transition duration-300"
      />

      <button
        onClick={prev}
        className="absolute top-1/2 right-3 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 rounded-full p-1 transition"
      >
        <ChevronRight className="text-gray-700" />
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 left-3 -translate-y-1/2 z-10 bg-white/50 hover:bg-white/80 rounded-full p-1 transition"
      >
        <ChevronLeft className="text-gray-700" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 transition">
        {Images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
