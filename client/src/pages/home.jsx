import "../css/home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="background" />
      <div className="gridContainer">
        <div className="column">
          <h1>
            <span className="one">Melissa's</span>
            <span className="two">Programming</span>
            <span className="three">Compendium</span>
          </h1>
          <p>Where everything is handcrafted by yours truely - from games, to programs, to the website itself! Click on a button to explore.</p>
        </div>
        <div className="column verticalFlexbox">
          <a href="/projects">Projects</a>
          <a href="/about">About Me</a>
        </div>
      </div>
    </div>
  )
}