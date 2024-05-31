import React from 'react';
import "../css/home.css";

const Home = () => {
  return (
    <div className="container">
      <a className="card" href='diceCalculator'>
          <img src="assets/images/d20.svg" alt="" />
          <h1>Dice Calculator</h1>
          <p>This calculator uses JavaScript to determine average damage for TTRPGs</p>
      </a>

      <a className="card" href='simon'>
          <img src="assets/images/simon.svg" alt="" />
          <h1>Simon</h1>
          <p>This game Simon uses JavaScript</p>
      </a>
      
      <a className="card" href='marylandFlag'>
          <img src="assets/images/marylandFlag.svg" alt="" />
          <h1>Maryland Flag</h1>
          <p>These Maryland flags were made using HTML and CSS</p>
      </a>

      <a className="card" href='website'>
          <img src="assets/images/logo.svg" alt="" />
          <h1>Website</h1>
          <p>This is the website you are currently looking at. It uses Node.js, EJS, CSS, and more</p>
      </a>
      
      <a className="card" href='nomaiWriting'>
          <img src="assets/images/nomaiText.png" alt="" />
          <h1>Nomai</h1>
          <p>This word processor uses Java to create a 2D script. Inspired by Outer Wilds</p>
      </a>
      
      <a className="card" href='slitherlinkSolver'>
          <img src="assets/images/slitherlink.png" alt="" />
          <h1>Slitherlink Solver</h1>
          <p>This Java program automatically solves slitherlink puzzle</p>
      </a>
    </div>
  );
};

export default Home;