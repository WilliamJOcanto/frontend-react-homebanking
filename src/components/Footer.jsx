import React from "react";
import MediaLogs from "./MediaLogs";

function Footer() {
  return (
    <div className="flex justify-between items-center border-t border-solid h-[8vh] bg-[#16374e] px-20">
      <p className="font-bold text-white">
        © 2024 Bank Ease. All rights reserved.
      </p>
      <span className="font-bold text-white">
        Cohort 55 -
        <a
          className="underline text-shadow"
          href="https://www.linkedin.com/feed/"
          target="_blank"
        >
          William Ocanto
        </a>
      </span>
      <MediaLogs />
    </div>
  );
}

export default Footer;
