import * as Fathom from 'fathom-client';

import { useEffect, useState, useRef } from "react";
import ImageGallery from "react-image-gallery";
import { useInView } from 'react-intersection-observer';

import Image from 'next/image';

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
  const [isCopied, setIsCopied] = useState(false);
  const elementRef = useRef(null);

  const onEmailCopyClick = () => {
    navigator.clipboard.writeText("macro@roush.io");
    setIsCopied(true);
    Fathom.trackGoal("VHOXAA9S", 0);
  };

  const onEmailLinkClick = () => {
    Fathom.trackGoal("TVIH4Z79", 0);
  };

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .5,
  });

  useEffect(() => {
    console.log('inview', inView)
    if (inView) {
      elementRef.current.playbackRate = .5;
      elementRef.current.play();
      Fathom.trackGoal("HU9SRLJ4", 0);
    }
  }, [inView]);

  return (
    <>
      <div className="mobile-header-container">
        <img className="logo-mobile" src="/macro-logo.svg"></img>
      </div>
      <div className="video-container">
        <video className="video-header"  muted playsInline autoPlay loop>
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
        <div className="two-column">
          <div>
            <h3 className="newpreheader">Making your products</h3>
            <h1 className="header">Larger than Life</h1>
          </div>
          <div>
            <p className="boldparagraph">
              Macro photography takes your products to the next level by showcasing details that would otherwise go unnoticed.
            </p>
            <p className="paragraph">
              Hello, I’m Jacob! By day, I’m a software engineer based out of Des Moines, Iowa. By night, I flex my photography skills in an attempt to recoup the cost of my expensive taste in camera equipment.
              A basic package includes 5 high-resolution photos and post-production delivered to your inbox within 7 business days.
            </p>
          </div>
        </div>
      </div>
        <ImageGallery showPlayButton={false} items={images} lazyload={true} />
        <div
            className="gutter"
            style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
        >
        <div className="two-column">
          <div>
            <h3 className="newpreheader">Making your products</h3>
            <h1 className={"header"}>{"What's Next?"}</h1>
          </div>
          <div className="text-block">
            <h3 className="preheader">Let's Talk</h3>
            <div>
              <h1 className="header-number">01</h1>
              <h1 className="header-number header"> Quote</h1>
              <p>
                Contact Macro for a custom quote. Macro offers custom photo and video solutions based on your needs. Choose from a basic package or something completely custom.
              </p>
            </div>
            <div>
              <h1 className="header-number">02</h1>
              <h1 className="header-number header"> Ship</h1>
              <p>
                It’s time for your close up! Carefully pack your product and ship it to Macro using a trusted carrier. We’ll track it every step of the way.
              </p>
            </div>
            <div>
              <h1 className="header-number">03</h1>
              <h1 className="header-number header"> Launch</h1>
              <p>
                Your high-resolution images with post-production will be digitally delivered within a week, so keep a close eye on your inbox!
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="wrapper" ref={ref}>
          <video className="video-header-2" ref={elementRef} muted playsInline>
            <source src="/website-scroll_1.mp4" type="video/mp4" />
          </video>
          <div className="contact-container">
            <h3 className="contactpreheader">Let's Talk</h3>
            <p className="cta">Reach out to me</p>
            <a className="email" href="mailto:macro@roush.io" onClick={() => onEmailLinkClick()}>
              macro@roush.io
            </a>
            {"  "}
            <button
                className="copy-email"
                title={"copy"}
                onClick={() => onEmailCopyClick()}
            >
              {isCopied ? <Image src="/Copy_2.svg" width={40} height={40} /> : <Image src="/Copy.svg" width={40} height={40} /> }
            </button>
          </div>
        </div>
    </>
  );
};
