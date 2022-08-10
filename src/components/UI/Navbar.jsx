import styles from './Navbar.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
const Navbar = () => {
  const [show, setShow] = useState(true);
  const [topOfPage, setTopOfPage] = useState(0);

  const controlNavbar = () => {
    if (topOfPage < window.scrollY) {
      setShow(false);
      setTopOfPage(window.scrollY);
      console.log('Scrolling downwards');
      console.log(window.scrollY);
      console.log(topOfPage);
    } else if (topOfPage > window.scrollY) {
      setShow(true);
      setTopOfPage(window.scrollY);
      console.log('Scrolling upwards');
      console.log(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [topOfPage]);
  return (
    <header className={show ? styles.navbar : styles['fade-out']}>
      <nav>
        <ul>
          <li>
            <HashLink smooth to="#Home">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#About">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#Work">
              Work
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
