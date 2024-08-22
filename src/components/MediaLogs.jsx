import React from "react";

function MediaLogs() {
  return (
    <div className="flex gap-4 pr-10">
      <a href="https://www.instagram.com/" target="_blank">
        <img
          className="w-[35px] h-[35px]"
          src="../instg-logo.png"
          alt="instagram-logo"
        />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <img
          className="w-[35px] h-[35px]"
          src="../fb-logo.png"
          alt="facebook-logo"
        />
      </a>
      <a href="https://web.whatsapp.com/" target="_blank">
        <img
          className="w-[35px] h-[35px]"
          src="../whtapp-logo.png"
          alt="whatsapp-logo"
        />
      </a>
    </div>
  );
}

export default MediaLogs;
