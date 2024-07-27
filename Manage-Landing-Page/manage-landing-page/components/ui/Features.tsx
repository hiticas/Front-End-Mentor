"use client";

export default function Features() {
  const features = [
    {
      number: "01",
      title: "Track company-wide progress",
      description:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      number: "02",
      title: "Advanced built-in reports",
      description:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      number: "03",
      title: "Everything you need in one place",
      description:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-24">
      <div className="md:flex md:space-x-12">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
            What&apos;s different about Manage?
          </h2>
          <p className="text-dark-grayish-blue">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="md:w-1/2">
          {features.map((feature, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="flex items-center mb-4">
                <span className="bg-bright-red text-white rounded-full px-6 py-2 mr-4">
                  {feature.number}
                </span>
                <h3 className="font-bold text-dark-blue">{feature.title}</h3>
              </div>
              <p className="text-dark-grayish-blue pl-20">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
