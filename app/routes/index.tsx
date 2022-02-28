import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    console.log(navigator.userAgent);
  });
  return (
    <>
      <div className="header">
        <div
          style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
          className="text-container"
        >
          <h1 className="header1">MACRO</h1>
          <h1 className="header2">Photo Service</h1>
        </div>
        <video className="video-header" muted playsInline autoPlay loop>
          <source src="/banner-take-test-6_1.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className="gutter"
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      >
        <p>Macro photography in simple terms; makes small things big.</p>
        <p>Show off the quality or fine details </p>
        <p></p>
        <h2>Why pay a professional?</h2>
        <p>
          The phone in your pocket has replaced the need for a professional
          camera in much of the day-to-day. For some macro shoots it is likely
          enough but professional equipment can take your product to the next
          level and show the ornateness of your product..
        </p>
        <h2>Who am I?</h2>
        <p>
          Hello, I'm Jacob. By day I am a software engineer based out of Des
          Moines, Iowa and when I'm not at work; I'm attempting to recoup the
          cost of my expensive taste in camera equipment.
        </p>
        <div className="offer">
          <p className="price">$100</p>
          <p>
            Basic session price with 5 photos and post-production digitally
            delivered.
          </p>
        </div>
        <h2>How do I get in touch?</h2>
        Reach out to me via: <a href="mailto:macro@roush.io">
          macro@roush.io
        </a>{" "}
        <div onClick={() => console.log("test")}>📋</div>
      </div>
    </>
  );
}
