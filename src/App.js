import React,{useState,useEffect} from "react";

// Files
import IntroVideo from "./components/IntoVideo.js";
import Section from "./components/Section.js";
import SectionTwo from "./components/SectionTwo.js";
import Footer from "./components/Footer";
import Misc from "./components/Misc.js";

// Css
import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/sectionTwo.scss";
import "./styles/footer.scss";
import "./styles/misc.scss";
import "./styles/mediaQuery.scss";


// Images
import FreshTopicImg from "./assets/academy.png";
import FreshTopicImg2 from "./assets/story.png";
import TedTalksImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiWalaImg from "./assets/image3.png";

// Database
import data from "./data/data.json";

const App = () => {

 
  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;

    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (element.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  
  

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);
    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);




  // Get Data From Database
  const {
    freshTopic,
    freshTopic2,
    tedTalks,
    franchise,
    map,
    courses,
    album,
    barat,
    chaiwala,
  } = data;

  const yellow = "#fff100",
    pink = "#ed1e79",
    white = "#fff",
    brown = "#6d3d0f";

  return (
    <div>
      <IntroVideo />
      {/* Fresh Topic  */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnText={freshTopic.btn}
        imgSrc={FreshTopicImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />

      {/* Fresh Topic2  */}
      <SectionTwo
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnText={freshTopic2.btn}
        imgSrc={FreshTopicImg2}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* Ted Talks  */}
      <SectionTwo
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnText={tedTalks.btn}
        imgSrc={TedTalksImg}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      {/* Franchise */}
      <SectionTwo
        h3={franchise.heading}
        text={franchise.text}
        btnText={franchise.btn}
        imgSrc={franchiseImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      {/* Map */}
      <SectionTwo
        h3={map.heading}
        text={map.text}
        imgSrc={mapImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={brown}
        btnColor={yellow}
        hasBtn={false}
      />
      {/* Courses */}
      <SectionTwo
        h3={courses.heading}
        text={courses.text}
        btnText={courses.btn}
        imgSrc={coursesImg}
        imgSize={"30%"}
        backgroundColor={yellow}
        headingColor={pink}
        textColor={pink}
        btnBgColor={pink}
        btnColor={yellow}
      />
      {/* Album */}
      <SectionTwo
        h3={album.heading}
        text={album.text}
        btnText={album.btn}
        imgSrc={albumImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      {/* Barat */}
      <SectionTwo
        h3={barat.heading}
        text={barat.text}
        btnText={barat.btn}
        imgSrc={baratImg}
        backgroundColor={pink}
        headingColor={yellow}
        textColor={yellow}
        btnBgColor={yellow}
        btnColor={pink}
      />
      {/* ChaiWala */}
      <SectionTwo
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnText={chaiwala.btn}
        imgSrc={chaiWalaImg}
        backgroundColor={white}
        headingColor={pink}
        textColor={brown}
        btnBgColor={brown}
        btnColor={yellow}
      />
      <Footer />
      <Misc />

    </div>
  );
};

export default App;
