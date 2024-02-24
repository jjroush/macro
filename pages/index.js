import * as Fathom from 'fathom-client';

import Head from 'next/head';
import { useEffect, useState, useRef } from "react";
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
  const [shouldShowModal, setShouldShowModal] = useState(false);

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
    if (inView) {
      elementRef.current.playbackRate = .5;
      elementRef.current.play();
      Fathom.trackGoal("HU9SRLJ4", 0);
    }
  }, [inView]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset
      document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
  });

  return (
    <>
      <Head>
        <title>
          Macro Product Photography DSM
        </title>
        <meta
            name="description"
            content="Macro photography takes your products to the next level by showcasing details that would otherwise go unnoticed."
            key="desc"
        />
      </Head>
      <div className="mobile-header-container">
        <img className="logo-mobile" src="/macro-logo.svg"></img>
      </div>
      <div className="video-container">
        <video className="video-header" muted playsInline autoPlay loop>
          <source src="/header.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
        className="gutter"
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
      <Image className="full-gallery" src="/macro-stock-1.png" width={1920} height={1080} alt="pencil" />
      <Image className="full-gallery" src="/macro-stock-2.png" width={1920} height={1080} alt="watch" />
      <Image className="full-gallery" src="/macro-stock-3.png" width={1920} height={1080} alt="watch" />
       <div
            className="gutter"
            style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
        >
        <div className="two-column">
          <div className={"arrow"}>
            <h3 className="newpreheader">The Process</h3>
            <h1 className={"header"}>{"What's Next?"}</h1>
            <Image className={"arrow"} src="/Arrow.svg" width={70} height={75} />
          </div>
          <div className="text-block">
            <div className="category">
              <h1 className="header-number-bullet preheader">01</h1>
              <h1 className="header-number header"> Quote</h1>
              {shouldShowModal && (
                <div id="myModal" className="modal" onClick={() => setShouldShowModal(false)}>
                    <Image src="/modal.png" width={895} height={806} alt="watch" />
                  {/*<div className="modal-content">*/}
                  {/*  <span className="close" onClick={() => setShouldShowModal(false)}>&times;</span>*/}
                  {/*  <p>Get Started</p>*/}
                  {/*  <p>A basic package includes 5 high-resolution photos and post-production delivered to your inbox within 7 business days.</p>*/}
                    {/*<div>*/}
                    {/*  <div>*/}
                    {/*    <p>5</p>*/}
                    {/*    <p>High Photos</p>*/}
                    {/*    <p>7</p>*/}
                    {/*    <p>Business Days</p>*/}
                    {/*    <p>120$</p>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                    {/*To add additional photos or video to your project, reach out directly for a custom quote to fit your needs.*/}
                  {/*</div>*/}
                </div>
              )}
              <p className="paragraph">
                Contact Macro for a custom quote. Macro offers custom photo and video solutions based on your needs. Choose from a <a onClick={() => setShouldShowModal(true)}>basic package</a> or something completely custom.
              </p>
            </div>
            <div className="category">
              <h1 className="header-number-bullet preheader">02</h1>
              <h1 className="header-number header"> Ship</h1>
              <p className="paragraph">
                It’s time for your close up! Carefully pack your product and ship it to Macro using a trusted carrier. We’ll track it every step of the way.
              </p>
            </div>
            <div className="category">
              <h1 className="header-number-bullet preheader">03</h1>
              <h1 className="header-number header"> Launch</h1>
              <p className="paragraph">
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
            <div>
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
        </div>
      <Image className="apeture" src="/Macro_Mark-01.svg" width={125} height={125} />
    </>
  );
};
