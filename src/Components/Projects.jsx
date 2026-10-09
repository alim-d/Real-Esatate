import { useRef } from "react";

const projects = [
  {
    name: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Central Square",
    price: "$2,50,000",
    location: "Los Angeles",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Modern Heights",
    price: "$3,20,000",
    location: "New York",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=85",
  },
];

export default function Projects() {
  const sliderRef = useRef(null);

  const moveSlider = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction * sliderRef.current.clientWidth * 0.7,
      behavior: "smooth",
    });
  };

  return (
    <section id="Projects" className="bg-white px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl tracking-tight text-black sm:text-4xl">
            <span className="font-bold">Projects</span>{" "}
            <span className=" text-blue-500 font-semibold">
              Completed
            </span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            Crafting Spaces, Building Legacies—Explore
            <br />
            Our Portfolio
          </p>
        </div>

        {/* Arrows */}
        <div className="mb-5 mt-8 flex justify-end gap-3">
          <button
            onClick={() => moveSlider(-1)}
            aria-label="Previous projects"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-2xl text-slate-600 transition hover:bg-blue-500 hover:text-white"
          >
            &#8249;
          </button>

          <button
            onClick={() => moveSlider(1)}
            aria-label="Next projects"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-2xl text-slate-600 transition hover:bg-blue-500 hover:text-white"
          >
            &#8250;
          </button>
        </div>

        {/* Projects Slider */}
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-8"
        >
          {projects.map((project, index) => (
            <article
              key={`${project.name}-${index}`}
              className="relative min-w-0 shrink-0 snap-start pb-7 w-[85%] sm:w-[48%] lg:w-[31%]"
            >
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                className="h-[340px] w-full rounded-sm object-cover sm:h-[400px] lg:h-[425px]"
              />

              {/* Project Details */}
              <div className="absolute bottom-0 left-1/2 w-[85%] -translate-x-1/2 bg-white px-4 py-3 shadow-lg">
                <h3 className="truncate text-lg font-semibold text-gray-900">
                  {project.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {project.price} | {project.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
