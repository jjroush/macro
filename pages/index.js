import { useEffect, useState, useRef } from "react";
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
  const [isCopied, setIsCopied] = useState(false);
  const elementRef = useRef(null);

  const onEmailCopyClick = () => {
    navigator.clipboard.writeText("macro@roush.io");
    // setIsCopied(true);
    window.fathom.trackGoal("VHOXAA9S", 0);
  };

  const onEmailLinkClick = () => {
    window.fathom.trackGoal("TVIH4Z79", 0);
  };

  const handleUserScroll = () => {
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 100
    ) {
      // window.fathom.trackGoal("HU9SRLJ4", 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleUserScroll);
    return () => {
      window.removeEventListener("scroll", handleUserScroll);
    };
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', handleFooterScroll)

    return () => {
      window.removeEventListener('scroll', handleFooterScroll);
      window.removeEventListener('scroll', handleFooterScroll);
    };
  }, [])

  const handleFooterScroll = event => {
    console.log('scrollTop: ', window.scrollY);
    console.log('videoheight', elementRef.current?.clientHeight)
    console.log('duration', elementRef.current.duration)
    console.log('time', (window.scrollY * elementRef.current.duration) / elementRef.current?.clientHeight)

    elementRef.current.currentTime = (window.scrollY * elementRef.current.duration) / (elementRef.current?.clientHeight / 3);
  };

  return (
    <>
      <div className="video-container-2">
        <video className="video-header-2" ref={elementRef} muted playsInline>
          <source src="/website-scroll_1.mp4" type="video/mp4" />
        </video>
      </div>
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
        <ImageGallery showPlayButton={false} items={images} lazyload={true} />
        {/*<div className="text-block key-info">*/}
        {/*  <h3 className="preheader">The Nitty Gritty</h3>*/}
        {/*  <h1 className="header">Let's Talk Details</h1>*/}
        {/*  <div className="about-group">*/}
        {/*    <div className="about-item">*/}
        {/*      <img className="logo-mobile" src="./Macro_Money.svg"></img>*/}
        {/*      <h1 className="details-header">120</h1>*/}
        {/*      <p className="details-type">dollars</p>*/}
        {/*    </div>*/}
        {/*    <div className="about-group-center">*/}
        {/*      <img className="logo-mobile" src="./Macro_Camera.svg"></img>*/}
        {/*      <h1 className="details-header">5</h1>*/}
        {/*      <p className="details-type">photos</p>*/}
        {/*    </div>*/}
        {/*    <div className="about-item">*/}
        {/*      <img className="logo-mobile" src="./Macro_Clock.svg"></img>*/}
        {/*      <h1 className="details-header">1</h1>*/}
        {/*      <p className="details-type">week</p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <p className="paragraph">*/}
        {/*    A basic package includes 5 high-resolution photos and*/}
        {/*    post-production delivered to your inbox within 3 business days.*/}
        {/*  </p>*/}
        {/*  <p className="paragraph">*/}
        {/*    Each project has it's own needs. Whether you want video or more*/}
        {/*    images, I am happy to get you a quote.*/}
        {/*  </p>*/}
        {/*  <h3 className="preheader">What's Next?</h3>*/}
        {/*  <h1 className="header">Steps</h1>*/}
        {/*  <ol className="list">*/}
        {/*    <li>Contact me to get a quote.</li>*/}
        {/*    <li>Ship your product out.</li>*/}
        {/*    <li>Photos will be digitally delivered in a week.</li>*/}
        {/*  </ol>*/}
        {/*</div>*/}
        <div className="two-column">
          <div>
            <h3 className="newpreheader">Making your products</h3>
            <h1 className={"header"}>{"What's Next?"}</h1>
          </div>
          <div>{"Steps"}</div>
        </div>
        <div className="text-block">
          <h3 className="preheader">Let's Talk</h3>
          <div>
            <h1 className="header-number">01</h1>
            <h1 className="header-number header">Quote</h1>
            <p>
              Contact Macro for a custom quote. Macro offers custom photo and video solutions based on your needs. Choose from a
            </p>
          </div>
        </div>
        <a href="mailto:macro@roush.io" onClick={() => onEmailLinkClick()}>
          macro@roush.io
        </a>
        {"  "}
        <button
          className="copy-email"
          title={"copy"}
          onClick={() => onEmailCopyClick()}
        >
          {isCopied ? "✅" : "📋"}
        </button>
      </div>
      <div className="spacer"></div>

    </>
  );
};
