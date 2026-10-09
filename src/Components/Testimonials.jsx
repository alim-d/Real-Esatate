
const testimonials = [
  {
    name: "Donald Jackman",
    role: "Marketing Manager",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    name: "Richard Nelson",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?img=11",
    rating: 4,
  },
  {
    name: "James Washington",
    role: "Co-Founder",
    image: "https://i.pravatar.cc/150?img=13",
    rating: 5,
  },
];

const review =
  "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.";

export default function Testimonials() {
  return (
    <section id="Testimonials" className="min-h-screen bg-white px-5 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-normal text-black sm:text-4xl">
            <span className="font-bold">Customer</span>{" "}
            <span className="text-blue-500 font-semibold">
              Testimonials
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
            Real Stories from Those Who Found Home
            <br />
            with Us
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-wrap justify-center gap-8 ">
          {testimonials.map((person) => (
            <div
              key={person.name}
              className="flex min-h-[425px] flex-col items-center border border-gray-100 bg-white px-7 py-12 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Profile Image */}
              <img
                src={person.image}
                alt={person.name}
                className="mb-5 h-[84px] w-[84px] rounded-full border-4 border-gray-100 object-cover"
              />

              {/* Name */}
              <h3 className="text-xl font-medium text-gray-900">
                {person.name}
              </h3>

              {/* Job */}
              <p className="mt-1 text-sm text-gray-500">
                {person.role}
              </p>

              {/* Stars */}
              <div
                className="mt-4 flex gap-1 text-2xl leading-none text-[#e76b45]"
                aria-label={`${person.rating} out of 5 stars`}
              >
                {Array.from({ length: person.rating }, (_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 max-w-xs text-[15px] leading-[25px] text-gray-600">
                {review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
