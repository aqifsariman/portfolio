import { useState, useEffect } from 'react';
import styles from './About.module.css';
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  });

  return (
    <section id="About" className={isLoaded ? styles.main : styles.notLoaded}>
      <header>Who Am I?</header>
      <p>
        I am a full stack developer. For the past year, I have made multiple
        projects from scratch and I am here to showcase it to you. Inquisitive
        in nature, I often find myself identifying gaps in work processes to
        come up with a feasible solution that benefits all parties. I want to
        succeed in a stimulating and challenging environment, building the
        success of the company while I experience advancement opportunities.
        Having the ability to create apps from scratch gives me the ability to
        fill those gaps and come up with limitless solutions.
      </p>
      <div className={styles['button-group']}>
        <SocialIcon
          url="https://www.linkedin.com/in/aqif-sariman-20b869160/"
          title="LinkedIn"
        />
        <SocialIcon
          url="https://wa.me/6596784335?text=Hi%20Aqif!"
          network="whatsapp"
          title="Whatsapp"
        />
        <SocialIcon
          url="mailto:aqifsariman@gmail.com"
          network="email"
          title="Email"
        />
        <SocialIcon
          url="https://github.com/aqifsariman"
          network="github"
          title="Github"
        />
      </div>
    </section>
  );
};

export default About;
