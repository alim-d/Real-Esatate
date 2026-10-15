
import { useState } from "react";

/*
  Needs these two <link> tags in index.html (they replace the old @import / CDN links):
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
*/

const inputClass =
  "bg-[#eee] border-none py-[10px] px-[15px] my-[8px] text-[13px] rounded-[8px] w-full outline-none";

const btnCommon =
  "text-white text-[12px] py-[10px] px-[45px] border rounded-[8px] font-semibold tracking-[0.5px] uppercase mt-[10px] cursor-pointer hover:[transition:all_0.5s_ease-in-out]";
const btnSolid =
  "bg-[#512daf] border-transparent hover:bg-white hover:text-[#512daf] hover:border-[#512daf]";
const btnGhost = "bg-transparent border-white hover:text-[#512daf]";

const formClass =
  "bg-white flex items-center justify-center flex-col px-[45px] h-full";
const h1Class = "text-[2em] font-bold";

function SocialIcons() {
  return (
    <div
      className="text-[#ccc] my-5 [&_i]:border [&_i]:border-[#ccc] [&_i]:rounded-[20%] [&_i]:inline-flex [&_i]:justify-center [&_i]:items-center [&_i]:text-[#555] [&_i]:mx-[5px] [&_i]:h-[40px] [&_i]:w-[40px]"
    >
      {/* CHANGED (3): removed the empty <a href="#" className="icon"> that was here */}
      <i className="fa-brands fa-google"></i>
      <i className="fa-brands fa-github"></i>
      <i className="fa-brands fa-linkedin"></i>
      <i className="fa-brands fa-amazon"></i>
    </div>
  );
}

export default function Login() {
  const [active, setActive] = useState(false);

  // CHANGED (4): stops the page from reloading when a form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    // CHANGED (5): slide speed is set here with "--dur" (was 0.6s everywhere, now 1.2s). Raise it to go slower.
    <div className="flex flex-col items-center justify-center h-screen leading-[normal] bg-[linear-gradient(to_right,#e2e2e2,#c9d6ff)] [font-family:Montserrat,sans-serif]" style={{ "--dur": "1.2s" }}>
      <style>{`
        @keyframes move {
          0%, 49.99% { opacity: 0; z-index: 1; }
          50%, 100% { opacity: 1; z-index: 5; }
        }
      `}</style>

      <div className="bg-white rounded-[20px] shadow-[0_0_15px_rgba(0,0,0,0.35)] relative overflow-hidden w-[800px] max-w-full min-h-[380px]">
        {/* Sign Up */}
        {/* CHANGED (5): transition and animate-[move] now use var(--dur) */}
        <div
          className={`absolute top-0 h-full [transition:all_var(--dur)_ease-in-out] left-0 w-1/2 ${
            active
              ? "translate-x-full opacity-100 z-[5] animate-[move_var(--dur)]"
              : "opacity-0 z-[1]"
          }`}
        >
          {/* CHANGED (4): onSubmit added to stop the page reload */}
          <form className={formClass} onSubmit={handleSubmit}>
            <h1 className={h1Class}>Create Account</h1>
            <SocialIcons />
            <span className="text-[12px]">or use your email for registration</span>
            <input type="text" placeholder="Name" className={inputClass} />
            <input type="email" placeholder="Email" className={inputClass} />
            <input type="password" placeholder="Password" className={inputClass} />
            <button className={`${btnCommon} ${btnSolid}`}>Sign Up</button>
          </form>
        </div>

        {/* Sign In */}
        {/* CHANGED (5): transition now uses var(--dur) */}
        <div
          className={`absolute top-0 h-full [transition:all_var(--dur)_ease-in-out] left-0 w-1/2 z-[2] ${
            active ? "translate-x-full" : ""
          }`}
        >
          {/* CHANGED (4): onSubmit added to stop the page reload */}
          <form className={formClass} onSubmit={handleSubmit}>
            <h1 className={h1Class}>Sign In</h1>
            <SocialIcons />
            <span className="text-[12px]">or use your email for password</span>
            <input type="email" placeholder="Email" className={inputClass} />
            <input type="password" placeholder="Password" className={inputClass} />
            {/* CHANGED (2): added mt-[15px] mb-[10px], the original "margin: 15px 0 10" had no unit and was ignored */}
            <a href="#" className="text-[#ccc] text-[13px] no-underline mt-[15px] mb-[10px]">
              Forgot your password?
            </a>
            <button className={`${btnCommon} ${btnSolid}`}>Sign IN</button>
          </form>
        </div>

        {/* Toggle */}
        {/* CHANGED (5): transition now uses var(--dur) */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden [transition:transform_var(--dur)_ease-in-out] z-[1000] ${
            active
              ? "-translate-x-full rounded-[0px_150px_100px_0px]"
              : "rounded-[150px_0px_0px_100px]"
          }`}
        >
          {/* CHANGED (1): added [transition:all_var(--dur)_ease-in-out], the original "0.6ss" was a typo so it never animated */}
          <div
            className={`bg-[linear-gradient(to_right,#5c6cc0,#512daf)] h-full text-white relative -left-full w-[200%] [transition:all_var(--dur)_ease-in-out] ${
              active ? "translate-x-1/2" : ""
            }`}
          >
            {/* CHANGED (5): transition now uses var(--dur) */}
            <div
              className={`absolute w-1/2 h-full flex items-center justify-center flex-col px-[30px] text-center top-0 [transition:all_var(--dur)_ease-in-out] ${
                active ? "translate-x-0" : "-translate-x-[200%]"
              }`}
            >
              <h1 className={h1Class}>Welcome Back!</h1>
              <p className="text-[14px] leading-[20px] tracking-[0.3px] my-5">
                Enter your credentials to access your account
              </p>
              <button
                className={`${btnCommon} ${btnGhost}`}
                onClick={() => setActive(false)}
              >
                Sign IN
              </button>
            </div>

            {/* CHANGED (5): transition now uses var(--dur) */}
            <div
              className={`absolute w-1/2 h-full flex items-center justify-center flex-col px-[30px] text-center top-0 right-0 [transition:all_var(--dur)_ease-in-out] ${
                active ? "translate-x-[200%]" : "translate-x-0"
              }`}
            >
              <h1 className={h1Class}>Hello, Friend!</h1>
              <p className="text-[14px] leading-[20px] tracking-[0.3px] my-5">
                Register with your credentials to access your account
              </p>
              <button
                className={`${btnCommon} ${btnGhost}`}
                onClick={() => setActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}