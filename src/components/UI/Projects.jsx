import styles from './Projects.module.css';
import BlackJack from '../../assets/BlackJack.jpg';
import VideoPoker from '../../assets/vp.jpg';
import Explore from '../../assets/ExploreAussie.jpg';
import WordPlay1 from '../../assets/Wordplay1.jpg';
import EV from '../../assets/EV.jpg';
import { useState } from 'react';

const Project = (props) => {
  const [imgHovered, setImageHovered] = useState('');

  const hoverHandler = (event) => {
    setImageHovered(event.target.alt);
    console.log(event.target.alt);
    console.log('Hovering Over');
  };
  const offHoverHandler = (event) => {
    setImageHovered('');
    console.log(event.target);
    console.log('Hovering Off');
  };

  return (
    <div className={props.className}>
      <div className={styles.projects}>
        <img
          src={EV}
          alt="EV"
          onMouseEnter={hoverHandler}
          onMouseLeave={offHoverHandler}
        />
        <p>EV Charging App</p>
        <div
          className={
            imgHovered !== 'EV'
              ? `${styles.description} ${styles.hide}`
              : styles.description
          }
        >
          <p>
            A full-stack app for Electric Vehicle users to find the nearest
            available charging spot. Navigation, duration and distance is also
            shown when location is chosen from current position. A wallet is
            also set up for each user to input their card details. As the car
            charges, it will keep track of the time taken and will deduct from
            user's wallet accordingly.
          </p>
          <p className={styles.stacks}>
            React | Express | CSS | PostgreSQL | Sequelize | Google Maps API |
            Stripe API
          </p>
        </div>
      </div>
      <div className={styles.projects}>
        <img
          onMouseEnter={hoverHandler}
          onMouseLeave={offHoverHandler}
          src={WordPlay1}
          alt="Wordplay"
        />
        <p>Word Play Game</p>
        <div
          className={
            imgHovered !== 'Wordplay'
              ? `${styles.description} ${styles.hide}`
              : styles.description
          }
        >
          <p>
            A full-stack app for word guessing game. Players are able to
            register and login to play the game. Having logged in, players have
            the ability to choose their favorite TV Show/Movie they would like
            to try. Players have to guess the word within a few tries and if
            unable to do so, it will skip to the next word. On their profile
            page, it will show their stats on their win/lose percentage, giving
            them an idea of how well they have done thus far in the game.
          </p>
          <p className={styles.stacks}>
            Express | CSS | PostgreSQL | Sequelize | ChartJS
          </p>
        </div>
      </div>
      <div className={styles.projects}>
        <img
          onMouseEnter={hoverHandler}
          onMouseLeave={offHoverHandler}
          src={Explore}
          alt="Explore"
        />
        <p>Explore Australia Travel Planner</p>
        <div
          className={
            imgHovered !== 'Explore'
              ? `${styles.description} ${styles.hide}`
              : styles.description
          }
        >
          <p>
            A server-side app for planning travel activities for the country of
            Australia. Users are to register and log into their account so as to
            track their itinerary plans. They are able to choose from a wide
            range of popular Australian cities and each city chosen, there will
            be a list of popular attractions with their prices per pax listed
            right beside it. All attractions chosen will be tallied at the end
            and user will see how much they would have to spend for their trip
            in terms of the attractions chosen. Users are also able to plan
            ahead on what to pack in their luggage for the weather forecast will
            show them if its going to be sunny or pouring.
          </p>
          <p className={styles.stacks}>
            Express | Bootstrap | PostgreSQL | Weather API
          </p>
        </div>
      </div>
      <div className={styles.projects}>
        <img
          onMouseEnter={hoverHandler}
          onMouseLeave={offHoverHandler}
          src={VideoPoker}
          alt="VideoPoker"
        />
        <p>Video Poker Game</p>
        <div
          className={
            imgHovered !== 'VideoPoker'
              ? `${styles.description} ${styles.hide}`
              : styles.description
          }
        >
          <p>
            A client side app of the classic casino game Video Poker. At the
            start of the game, players are to choose how much money they want to
            start with. They can choose how much they want to bet for each
            round. Once they have locked in their bets, 5 cards will turn over
            to reveal their hand. Players can choose the cards they will like to
            hold and the rest of it will be swapped out once they click deal.
            The game will end once they run out of money in hand. There is a
            hidden game feature called 7 Card Stud built into the app. Looking
            closely at the homepage, players will be able to see the
            instructions to get into that mode. They will then be able to play
            the game in this mode's rulebook.
          </p>
          <p className={styles.stacks}> HTML | CSS | DOM Manipulation</p>
        </div>
      </div>

      <div className={styles.projects}>
        <img
          onMouseEnter={hoverHandler}
          onMouseLeave={offHoverHandler}
          src={BlackJack}
          alt="Blackjack"
        />
        <p>Black Jack Game</p>
        <div
          className={
            imgHovered !== 'Blackjack'
              ? `${styles.description} ${styles.hide}`
              : styles.description
          }
        >
          <p>
            A simple client side game of Blackjack. The rule of the game is
            straightforward and very easy to understand. Players are to choose
            the amount they want to start off with. Once the game starts, they
            are able to keep playing till they're satisfied or till they've run
            out of money. There will be visuals of winning, losing and draw
            states at the end of each round.
          </p>
          <p className={styles.stacks}> HTML | CSS | DOM Manipulation</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
