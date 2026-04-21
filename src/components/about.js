import {useState} from "react";
import Expand from "react-expand-animated";
import * as style from "../styles/about/about.module.scss";
import Button from "./button";

const About = () => {
  const [isOpenText1, setIsOpenText1] = useState(false);
  const [isOpenText2, setIsOpenText2] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);
  const [delete2ndButton, setDelete2ndButton] = useState(false);
  const [showSecondButton, setShowSecondButton] = useState(false);

  const handleClick = () => {
    setIsOpenText1(true);
    setTimeout(() => {
      setDeleteButton(true);
    }, 200);
    setTimeout(() => {
      setShowSecondButton(true);
    }, 6000);
  };

  const handleClick2 = () => {
    setIsOpenText2(true);
    setTimeout(() => {
      setDelete2ndButton(true);
    }, 200);
  };

  return (
    <section className={style.about} id="about">
      <div className="container">
        <div className="about-sign">
          <i className="fa fa-heart-o" aria-hidden="true"></i>
          <span className="off">A</span>BOUT ME
        </div>
      </div>
      <div className={style.aboutMeText}>
        <p>
          My name is Aleksandra. I’m a <strong>front-end developer</strong>{" "}
          based in Stockholm. I have been working professionally as a web
          developer for nearly <strong>5 years</strong>. Prior to that I
          graduated from the <i>Hyper Island Frontend Developer Program</i>.
        </p>
        <p>
          I have a very <em>inquisitive</em> mind, which means I’m constantly
          questioning, analyzing, and looking at processes from different
          perspectives.
        </p>

        <p>
          Here’s where I should get to the point, list my skills, and show off
          my work... I promise, I’ll get there.
        </p>
        <p>
          First, though, here’s something you should know about me:{" "}
          <strong>
            <em>I am a big-picture thinker</em>
          </strong>
          .<br />
        </p>

        <p>
          Here’s a glimpse into my background that shaped me, to help you get a
          sense of the kind of person I am.
        </p>
        <div className={style.aboutButtonWrapper}>
          <button
            className={deleteButton ? style.remove : style.aboutButton}
            onClick={handleClick}
          >
            {" "}
            <span></span>
            <span></span>
            <span></span>
            <span></span>Get to know me
          </button>
        </div>
        <Expand open={isOpenText1}>
          <ul className={style.aboutMeFacts}>
            <div className={style.facts}>
              <li>As a teenager I became a licenced glider pilot.</li>
              <li>
                I came to Sweden 9 years ago, on my own, without a plan or
                money.
              </li>
              <li>I got a great interest in psychology.</li>
              <li>
                I've worked in various fast-paced service jobs including retail
                and the restaurant industry. I worked also as a dog walker.
              </li>
              <li>
                I enjoy exploring new ways of self-expression. I practiced
                mixing music, which resulted in a few gigs around Stockholm.
              </li>
              <li>
                I also collaborated with a few international alternative
                clothing brands when I was growing my social media reach to 100k
                followers. Along with that, I picked up an interest in
                photography and photo editing using Adobe Software.
              </li>
            </div>
          </ul>
          <div className={style.aboutMeQuestion} visible={showSecondButton}>
            <p>...where am I going with this?</p>
            <div className={style.aboutButtonWrapper}>
              <button
                className={delete2ndButton ? style.remove : style.aboutButton}
                onClick={handleClick2}
              >
                {" "}
                <span></span>
                <span></span>
                <span></span>
                <span></span>Get to understand me
              </button>
            </div>
          </div>
        </Expand>
        <Expand open={isOpenText2}>
          <div className={style.aboutMeText2}>
            <p>
              Experimenting with creative software has led me to becoming{" "}
              <del>obsessed</del> <ins>passionate</ins> about coding and
              development, which allows me to create new value utilising already
              gained skills/perspectives/experiences as contributions to new
              solutions
            </p>

            <p>
              <em> Taking chances</em> and <em>calculating risks</em>, required{" "}
              <strong>
                <em>resourcefulness</em>
              </strong>
              ,{" "}
              <strong>
                <em>flexibility</em>
              </strong>{" "}
              and{" "}
              <strong>
                <em>adaptation</em>
              </strong>{" "}
              to new situations. Therefore deep diving head-first into new
              settings was always conscious choice of forcing my development and
              challenging myself in unknown areas.
            </p>
            <p>
              My personal hobbies like psychology aid in effective communication
              across teams which is essential especially when working primarily
              remotely. I found it also very helpful with understanding and
              adapting to dynamics within the team and understanding end-users.
            </p>

            <p>
              My extroverted nature of a curious kid plays probably the biggest
              role; through socializing and A LOT OF QUESTIONS{" "}
              <em>(yes, I am THAT person)</em> I got to learn new things and
              understand different perspectives -{" "}
              <em>see the bigger picture</em>, analyze it, and look for
              opportunities. <br />
              Now that I've introduced myself, let's collaborate and create
              something awesome together!
            </p>
            <div className={style.ctaSection}>
              <Button text="Let's Talk" />
            </div>
          </div>
        </Expand>
      </div>
    </section>
  );
};
export default About;
