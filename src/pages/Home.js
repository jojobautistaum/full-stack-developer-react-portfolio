import React from "react";
import coverImage from "../assets/images/full-stack-developer.jpg";
import avatar from "../assets/images/avatar.jpg";
import "./pages.css";

function Home() {
  return (
    <div>
      <section className="row my-5 container">
        <div className="col-3">
          <img src={avatar} alt="avatar pic" />
        </div>
        <div className="col-12">
          <h1 id="about">About Me</h1>
        </div>
        <div
          className="offset-1 col-10 bg-image"
          style={{ backgroundImage: `url(${coverImage})` }}
        >
          <div className="about-text p-5">
            <h4 className="pb-3">
              My name is Jojo, aspiring as a Full Stack Web Developer. Out of
              college, I started as a developer in a small company developing
              Apps written in C. After the company moved to a different
              location, I found myself in teaching at one of the colleges in my
              hometown. When my family moved to Iowa, I reevaluated my career. A
              couple years passed, I found my way back to Technology.
            </h4>
            <h4>
              The company needs change and they need a dedicated team for
              Application Support. I really enjoy the challenge of
              troubleshooting and the satisfaction every time I solve an issue.
              Along the way, I dreamed of going back to the Development world.
              The coding boot camp at the U of M is a perfect opportunity for me
              to go back to the things I will enjoy the most.
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
