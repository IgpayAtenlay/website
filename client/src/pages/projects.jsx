import "../css/projects.css";
import Card from "./card";

export default function Projects() {
  return (
  <div className="projects container">
    <Card 
      url="creatureCreator"
      title="Creature Creator"
      description="Use this React program to make Pathfinder creatures that look straight from the book!"
    />

    <Card 
      url="diceCalculator"
      image="d20.svg"
      title="Dice Calculator"
      description="This calculator uses JavaScript to determine average damage for TTRPGs"
    />

    <Card
      url="simon"
      image="simon.svg"
      title="Simon"
      description="This game Simon uses JavaScript"
    />

    <Card
      url="marylandFlag"
      image="marylandFlag.svg"
      title="Maryland Flag"
      description="These Maryland flags were made using HTML and CSS"
    />

    <Card
      url='website'
      image="logo.svg"
      title="Website"
      description="This is the website you are currently looking at. It uses React, Node.js, CSS, HTML, and more"
    />

    <Card
      url="nomaiWriting"
      image="nomaiText.png"
      title="Nomai"
      description="This word processor uses Java to create a 2D script. Inspired by Outer Wilds"
    />
    
    <Card
      url="slitherlinkSolver"
      image="slitherlink.png"
      title="Slitherlink Solver"
      description="This Java program automatically solves slitherlink puzzle"
    />
  </div>);
};