import { useContext } from "react";
import { useTitle } from "../util/title";
import { GithubLinkContext } from "../App";

export default function SlitherlinkSolver() {
  useTitle("Slitherlink Solver");
  var {setGithubLink} = useContext(GithubLinkContext);
  setGithubLink("/Slitherlink");

  return (
  <div className="slitherlinkSolver">
    <p>For more information about slitherlink puzzles visit <a href="https://en.wikipedia.org/wiki/Slitherlink">the wiki page</a>.</p>
  </div>);
};