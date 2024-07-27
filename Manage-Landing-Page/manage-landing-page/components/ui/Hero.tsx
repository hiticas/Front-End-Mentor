"use client";
import Image from "next/image";
import bgIllustration from "../../public/assets/images/illustration-intro.svg";
import bgTablet from "../../public/assets/images/bg-tablet-pattern.svg";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-12 md:py-24 md:flex md:items-center md:space-x-12">
      <div className="md:w-1/2 mb-12 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-6">
          Bring everyone together to build better products.
        </h1>
        <p className="text-dark-grayish-blue mb-8">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="bg-bright-red text-white px-8 py-3 rounded-full hover:bg-bright-red/90">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 relative">
        <Image
          src={bgIllustration}
          alt="Illustration"
          width={580}
          height={525}
        />
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <Image
            src={bgTablet}
            alt="Background pattern"
            width={814}
            height={814}
          />
        </div>
      </div>
    </section>
  );
}
