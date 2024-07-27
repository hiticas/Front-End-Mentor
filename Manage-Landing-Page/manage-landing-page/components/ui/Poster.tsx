"use client";

export default function Poster() {
  return (
    <section className="bg-bright-red">
      <div className="container mx-auto px-6 py-24 md:flex md:items-center md:justify-between">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-0 md:w-1/2">
          Simplify how your team works today.
        </h2>
        <button className="bg-white text-bright-red px-8 py-3 rounded-full hover:bg-white/90">
          Get Started
        </button>
      </div>
    </section>
  );
}
