import React from "react";

const Video = () => {
  return (
    <div className="max-xmd:   absolute top-2 right-2  gap-2 ">
      {/* <h1>Check out my video introduction</h1> */}
      <iframe
        width="190"
        height="215"
        className="rounded-2xl"
        src="https://www.youtube.com/embed/swQfujNqRHI?si=_XTVDUSB7cx2t8yw"
        title="YouTube video player"
        frameborder="1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default Video;
