
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast(null);
    }, 4000);

    return () => clearTimeout(timer);
  }, [toast]);

//   const handleSubmit = async (e) => {
//     const form = e.currentTarget;
//     e.preventDefault();
//     setLoading(true);
//     setToast(null);

//     try {
//       await emailjs.sendForm(
//         "service_ulh6ya7",
//         "template_tfqzypd",
//         e.currentTarget,
//         {
//           publicKey: "LL-ltHNoko1m9I5Qu",
//         }
//       );

//       e.currentTarget.reset();

//       setToast({
//         type: "success",
//         message: "Form Submitted Successfully",
//       });
    
// } catch (error) {
//   console.error("EmailJS status:", error.status);
//   console.error("EmailJS details:", error.text);
//   console.error("Full error:", error);

//   setToast({
//     type: "error",
//     message: `Error ${error.status || ""}: ${
//       error.text || error.message || "Unknown error"
//     }`,
//   });
// }

//     finally {
//       setLoading(false);
//     }
//   };


const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  setLoading(true);
  setToast(null);

  try {
    await emailjs.sendForm(
      "service_ulh6ya7",
      "template_tfqzypd",
      form,
      {
        publicKey: "LL-ltHNoko1m9I5Qu",
      }
    );

    // نفرّغ الفورم بعد نجاح الإرسال
    form.reset();

    setToast({
      type: "success",
      message: "Form Submitted Successfully",
    });
  } catch (error) {
    console.error("EmailJS status:", error.status);
    console.error("EmailJS details:", error.text);
    console.error("Full error:", error);

    setToast({
      type: "error",
      message: `Error ${error.status || ""}: ${
        error.text || error.message || "Unknown error"
      }`,
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="min-h-screen bg-white px-5 py-20">
      {/* Notification */}
      {toast && (
        <div
          role="status"
          className={`fixed right-8 top-8 z-50 w-[330px] max-w-[calc(100%-2rem)] overflow-hidden rounded-md bg-white shadow-xl ${
            toast.type === "success"
              ? "text-gray-600"
              : "text-red-600"
          }`}
        >
          <div className="flex items-center gap-3 p-4">
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white ${
                toast.type === "success"
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
            >
              {toast.type === "success" ? "✓" : "!"}
            </span>

            <p className="flex-1 text-sm font-medium">
              {toast.message}
            </p>

            <button
              type="button"
              onClick={() => setToast(null)}
              aria-label="Close notification"
              className="self-start text-lg text-gray-400 hover:text-gray-700"
            >
              ×
            </button>
          </div>

          <div
            className={`h-1 ${
              toast.type === "success"
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          />
        </div>
      )}

      {/* Heading */}
      <div className="mb-20 text-center">
        <h2 className="text-3xl font-normal text-black sm:text-4xl">
          <span className="font-bold">Contact</span>{" "}
          <span className="underline underline-offset-4">
            With Us
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-gray-500">
          Ready to Make a Move? Let's Build Your
          <br />
          Future Together
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-[708px]"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="user_name"
              className="mb-2 block text-sm text-gray-600"
            >
              Your Name
            </label>

            <input
              id="user_name"
              name="user_name"
              type="text"
              placeholder="Your Name"
              required
              maxLength={100}
              className="h-[53px] w-full rounded-md border border-gray-200 px-4 text-sm outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="user_email"
              className="mb-2 block text-sm text-gray-600"
            >
              Your Email
            </label>

            <input
              id="user_email"
              name="user_email"
              type="email"
              placeholder="Your Email"
              required
              maxLength={254}
              className="h-[53px] w-full rounded-md border border-gray-200 px-4 text-sm outline-none transition focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mt-7">
          <label
            htmlFor="message"
            className="mb-2 block text-sm text-gray-600"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
            maxLength={5000}
            rows={7}
            className="w-full resize-y rounded-md border border-gray-200 px-4 py-4 text-sm outline-none transition focus:border-blue-500"
          />
        </div>

        <div className="mt-7 text-center">
          <button
            type="submit"
            disabled={loading}
            className="min-h-[43px] w-[208px] rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
}
