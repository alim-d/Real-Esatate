
// import {
//   Heart,
//   MapPin,
//   Mail,
//   Phone,
//   ArrowRight,
// } from "lucide-react";

// const Footer = () => {
//   const quickLinks = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Portfolio", href: "#portfolio" },
//     { name: "Testimonials", href: "#testimonials" },
//     { name: "Contact", href: "#contact" },
//   ];

//   const services = [
//     "Web Development",
//     "UI/UX Design",
//     "Responsive Design",
//     "Web Applications",
//   ];

 

//   return (
//     <footer className="relative overflow-hidden bg-white text-slate-600">
//       {/* Decorative background */}
//       <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl" />
//       <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-green-100/40 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8 lg:pt-20">
//         <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

//           {/* Brand */}
//           <div>
//             <a
//               href="#home"
//               className="inline-flex items-center gap-3 text-2xl font-extrabold tracking-tight text-slate-900"
//             >
//               <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-200">
//                 W
//               </span>
//               <span>
//                 Web<span className="text-blue-600">Craft</span>
//               </span>
//             </a>

//             <p className="mt-6 max-w-xs text-sm leading-7 text-slate-500">
//               Building modern digital experiences with creativity,
//               quality, and attention to every detail.
//             </p>

    
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold text-slate-900">
//               Quick Links
//             </h3>

//             <ul className="mt-6 space-y-4">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-blue-600"
//                   >
//                     <ArrowRight
//                       size={15}
//                       className="text-blue-500 transition-transform group-hover:translate-x-1"
//                     />
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-bold text-slate-900">
//               Our Services
//             </h3>

//             <ul className="mt-6 space-y-4">
//               {services.map((service) => (
//                 <li
//                   key={service}
//                   className="flex items-center gap-3 text-sm"
//                 >
//                   <span className="h-2 w-2 rounded-full bg-blue-500" />
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-bold text-slate-900">
//               Get in Touch
//             </h3>

//             <div className="mt-6 space-y-5">
//               <div className="flex items-start gap-4">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
//                   <MapPin size={19} />
//                 </span>
//                 <div>
//                   <p className="font-medium text-slate-800">
//                     Location
//                   </p>
//                   <p className="mt-1 text-sm text-slate-500">
//                     Mogadishu, Somalia
//                   </p>
//                 </div>
//               </div>

//               <a
//                 href="mailto:jaamacsalmaan9@gmail.com"
//                 className="flex items-start gap-4"
//               >
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
//                   <Mail size={19} />
//                 </span>
//                 <div className="min-w-0">
//                   <p className="font-medium text-slate-800">
//                     Email Us
//                   </p>
//                   <p className="mt-1 break-all text-sm transition-colors hover:text-blue-600">
//                     jaamacsalmaan9@gmail.com
//                   </p>
//                 </div>
//               </a>

//               <div className="flex items-start gap-4">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
//                   <Phone size={19} />
//                 </span>
//                 <div>
//                   <p className="font-medium text-slate-800">
//                     Phone
//                   </p>
//                   <p className="mt-1 text-sm text-slate-500">
//                     Contact us by email
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="relative border-t border-slate-200 bg-slate-950">
//         <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left lg:px-8">
//           <p className="text-sm text-slate-400">
//             © {new Date().getFullYear()} WebCraft. All rights reserved.
//           </p>

//           <p className="flex items-center gap-2 text-sm text-slate-400">
//             Made with
//             <Heart
//               size={16}
//               className="fill-red-500 text-red-500"
//             />
//             for a better web.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import {
  Heart,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "Responsive Design",
    "Web Applications",
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-50 text-slate-600 ">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-green-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10 lg:py-16">
        {/* Main footer */}
        <div className="flex  gap-60  lg:gap-12 bg-gray-100 ">

          {/* Brand */}
          <div className="lg:pr-4">
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-extrabold text-white shadow-lg shadow-blue-600/20">
                W
              </span>

              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Web<span className="text-blue-600">Craft</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Building modern digital experiences with creativity,
              quality, and attention to every detail.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Let's Talk
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Quick Links
            </h3>

            <div className="mt-3 h-1 w-10 rounded-full bg-blue-600" />

            <ul className="mt-6 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2.5 text-sm transition-colors duration-200 hover:text-blue-600"
                  >
                    <ArrowRight
                      size={14}
                      className="shrink-0 text-blue-500 transition-transform duration-200 group-hover:translate-x-1"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Our Services
            </h3>

            <div className="mt-3 h-1 w-10 rounded-full bg-blue-600" />

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Get in Touch
            </h3>

            <div className="mt-3 h-1 w-10 rounded-full bg-blue-600" />

            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <MapPin size={18} />
                </span>

                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-semibold text-slate-800">
                    Location
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Mogadishu, Somalia
                  </p>
                </div>
              </div>

              <a
                href="mailto:jaamacsalmaan9@gmail.com"
                className="group flex items-start gap-3.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={18} />
                </span>

                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-semibold text-slate-800">
                    Email Address
                  </p>
                  <p className="mt-1 break-all text-sm leading-6 text-slate-500 transition-colors group-hover:text-blue-600">
                    jaamacsalmaan9@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-3.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Phone size={18} />
                </span>

                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-semibold text-slate-800">
                    Phone & Support
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Contact us by email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center sm:flex-row sm:px-8 sm:text-left lg:px-10">
          <p className="text-xs leading-6 text-slate-400 sm:text-sm">
            © {new Date().getFullYear()} WebCraft. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-slate-400 sm:text-sm">
            Made with
            <Heart
              size={15}
              className="fill-red-500 text-red-500"
            />
            for a better web.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
