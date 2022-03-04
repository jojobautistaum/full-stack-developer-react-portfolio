import React from 'react';
import coverImage from '../../assets/backgrou';
function Home() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>My name is Jojo, aspiring as a Full Stack Web Developer. Out of college, I started as a developer in a small company developing Apps written in C. After the company moved to a different location, I found myself in teaching at one of the college in my hometown. When my family moved to Iowa, I reevaluated my career. A couple years passed, I found my way back to Technology.</p>
        <p>The company needs change and they need a dedicated team for Application Support. I really enjoyed the challenge of troubleshooting and the satisfaction every time I solved an issue. Along the way, I dreamed of going back to the Development world. The coding boot camp at the UM is a perfect opportunity for me to go back to the things I will enjoy the most.</p>
      
      </div>
    </section>
  );
}

export default About;
