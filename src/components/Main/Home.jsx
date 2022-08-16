import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Headshot from '../../assets/headshot.jpg';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 800);
  });

  return (
    <section id="Home" className={isLoaded ? styles.main : styles.notLoaded}>
      <div className={styles.headshot}>
        <img src={Headshot} alt="Headshot" />
      </div>
      <div className={styles.intro}>Aqif Sariman</div>
      <div className={styles.title}>Full Stack Developer</div>
      <div className={styles.description}>
        React | Express | Node | PostgreSQL
      </div>
    </section>
  );
};

export default Home;
