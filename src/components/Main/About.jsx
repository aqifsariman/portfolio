import { useState, useEffect } from 'react';
import styles from './About.module.css';

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
        I am a highly motivated full stack developer. For the past year, I have
        made multiple projects from scratch and I am here to showcase it to you.
        Inquisitive in nature, I often find myself identifying gaps in work
        processes to come up with a feasible solution that benefits all parties.
        I want to succeed in a stimulating and challenging environment, building
        the success of the company while I experience advancement opportunities.
        Having the ability to create apps from scratch gives me the ability to
        fill those gaps and come up with limitless solutions.
      </p>
    </section>
  );
};

export default About;
