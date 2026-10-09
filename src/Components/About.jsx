
export default function About() {
  const stats = [
    { number: "10+", label: "Years of Excellence" },
    { number: "12+", label: "Projects Completed" },
    { number: "20+", label: "Mn. Sq. Ft. Delivered" },
    { number: "25+", label: "Ongoing Projects" },
  ];

  return (
    <section id="About" className="w-full bg-white px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-normal tracking-tight text-black sm:text-4xl">
            <span className="font-bold">About</span>{" "}
            <span className="text-blue-500 font-semibold">
              Our Brand
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500 sm:text-base max-w-80">
            Passionate About Properties, Dedicated to
            <br className="hidden sm:block" /> Your Vision
          </p>
        </div>

        {/* Content */}
        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
          {/* Building Image */}
          <div className="relative mx-auto h-[380px] w-full max-w-[480px] overflow-hidden rounded-t-[180px] sm:h-[480px] sm:rounded-t-[230px] md:h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
              alt="Modern architectural building"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 pt-4 sm:gap-x-8 sm:pt-8 md:pt-10 ">
            {stats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
                  {stat.number}
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-600 sm:text-base">
                  {stat.label}
                </p>
                
              </div>
              
              
            ))}

            <div>
               <button className=" bg-blue-500 text-white px-8 py-2 rounded-full hover:bg-blue-600">Learn More!</button> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}