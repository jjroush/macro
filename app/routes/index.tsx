import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
const images = [
  {
    original: "https://roush-image.s3.amazonaws.com/macro/pencil.jpg",
    thumbnail: "https://roush-image.s3.amazonaws.com/macro/pencil_thumb.jpg",
  },
  {
    original: "https://roush-image.s3.amazonaws.com/macro/quarter.jpg",
    thumbnail: "https://roush-image.s3.amazonaws.com/macro/quarter_thumb.jpg",
  },
  {
    original: "https://roush-image.s3.amazonaws.com/macro/watch.jpg",
    thumbnail: "https://roush-image.s3.amazonaws.com/macro/watch_thumb.jpg",
  },
  {
    original: "https://roush-image.s3.amazonaws.com/macro/buck.jpg",
    thumbnail: "https://roush-image.s3.amazonaws.com/macro/buck_thumb.jpg",
  },
];

export default function Index() {
  const onEmailCopyClick = () => {
    navigator.clipboard.writeText("macro@roush.io");
    setIsCopied(true);
  };
  useEffect(() => {
    console.log(navigator.userAgent);
  });

  const [isCopied, setIsCopied] = useState<Boolean>(false);
  return (
    <>
      <div className="mobile-header-container">
        <img className="logo-mobile" src="/macro-logo.svg"></img>
      </div>
      <div className="video-container">
        <video className="video-header" muted playsInline autoPlay loop>
          <source src="/desktop-header-3mg.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
        className="text-container"
      >
        <img className="logo" src="/macro-logo.svg"></img>
      </div>
      <div
        className="gutter"
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      >
        <div className="text-block">
          <h3 className="preheader">Making your products</h3>
          <h1 className="header">Larger than Life</h1>
          <h3 className="speil">
            Macro photography can take your product to the next level by
            showcasing details that would otherwise go unnoticed.
          </h3>
        </div>
        <ImageGallery showPlayButton={false} items={images} lazyload={true} />
        <p></p>
        <h2>Why pay a professional?</h2>
        <p>
          The phone in your pocket has replaced the need for a professional
          camera in much of the day-to-day. For some macro shoots it is likely
          enough but professional equipment can take your product to the next
          level and show the ornateness of your product..
        </p>
        <div className="text-block">
          <h3 className="preheader">Who am I?</h3>
          <h1 className="header">Meet the Photographer</h1>
          <h3 className="speil">
            Hello, I'm Jacob 👋. By day I am a software engineer based out of
            Des Moines, Iowa and when I'm not at work; I'm attempting to recoup
            the cost of my expensive taste in camera equipment.
          </h3>
        </div>
        <p></p>
        <div className="offer">
          <div>
            <i className={"starting"}>Starting at</i>
            <p className="price">$120</p>
          </div>
          <p>
            Basic session price with 5 photos and post-production digitally
            delivered.
          </p>
        </div>
        <h2>How do I get in touch?</h2>
        Reach out to me via: <a href="mailto:macr@ush.io">
          macro@roush.io
        </a>{" "}
        <button title={"copy"} onClick={() => onEmailCopyClick()}>
          {isCopied ? "✅" : "📋"}
        </button>
      </div>
    </>
  );
}
