import style from "./about.module.scss";
//import React from 'react';
import ReactPlayer from 'react-player';

function About() {
  return (
    <div className={style.about}>
      <div className={style.aboutText}>
        <h1>Most important title on the page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </p>
      </div>

      <div className={style.aboutVideo}>
      <ReactPlayer
      url="<https://www.youtube.com/watch?v=dQw4w9WgXcQ>"
      width="700"
      height="500"
      controls
    />
      </div>
    </div>
  );
}

export default About;
