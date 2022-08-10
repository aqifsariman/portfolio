import styles from './Work.module.css';
import Project from '../UI/Projects';
import { useState, useEffect } from 'react';

const Work = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  });

  return (
    <section id="Work" className={isLoaded ? styles.main : styles.notLoaded}>
      <header>Some Works I've Done</header>
      <Project className={styles['project-container']} />
    </section>
  );
};

export default Work;
