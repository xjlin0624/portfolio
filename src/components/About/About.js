import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
          <ScrollAnimation animateIn="fadeInLeft">
        <div className="BigCard">
          <Image
            src="/my-grad-pic.svg"
            alt="my-grad-pic"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Xuelan Lin</strong> and I also goes by <strong>Joanna</strong> :D. I'm originally from China and have been going to school in the United States. I graduated from UC Berkeley in May 2024 majoring in Data Science and Chemical Biology, and decided to pursue a more technical journey through working towards my Master of Science degree in Computer Science at Northeastern University.

              <br /><br />
            
            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue the Computer Systems Technology program. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
            Throughout my studies at BCIT, I had the opportunity to engage in fascinating projects. Notably, I contributed to the development of the RENR Safety App and MyMind, projects that garnered recognition from my colleagues, instructors, and clients alike.

            <br /><br />

              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>


            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>

              <br /><br />

              In my free time, I love to dance and go out into the nature. I was the captain of one of our competitive dance teams at UC Berkeley and have organized multiple social events and competition logistics, and I am confident to say I have built a healthy and trusting team environment for our members. Please watch <a href={'https://www.youtube.com/watch?v=R7aFGuhRD5k'} className={"afx"} target={"_blank"} rel={"noopener noreferrer"}>our set</a> that place 3rd at Maxt Out Dance Competition if you're interested!

          </div>
        </div>
      </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default About;
