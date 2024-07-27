"use client";
import Image from "next/image";

import avatarAnisha from "../../public/assets/images/avatar-anisha.png";
import avatarAli from "../../public/assets/images/avatar-ali.png";
import avatarRichard from "../../public/assets/images/avatar-richard.png";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anisha Li",
      image: avatarAnisha,
      quote:
        '"Manage has supercharged our teams workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."',
    },
    {
      name: "Ali Bravo",
      image: avatarAli,
      quote:
        '"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."',
    },
    {
      name: "Richard Watts",
      image: avatarRichard,
      quote:
        '"Manage allows us to provide structure and process. It keeps us organized and focused. I can not stop recommending them to everyone I talk to!"',
    },
  ];

  return (
    <section className="container mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-12">
        What they&apos;ve said
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-very-light-gray p-6 rounded-lg">
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="font-bold text-dark-blue mb-4">
              {testimonial.name}
            </h3>
            <p className="text-dark-grayish-blue">{testimonial.quote}</p>
          </div>
        ))}
      </div>
      <button className="mt-12 bg-bright-red text-white px-8 py-3 rounded-full hover:bg-bright-red/90">
        Get Started
      </button>
    </section>
  );
}
