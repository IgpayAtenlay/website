import { useTitle } from "../util/useTitle";
import { useFooter } from "../util/useFooter";

export default function SlitherlinkSolver() {
  useTitle("Slitherlink Solver");
  useFooter({link: "/Slitherlink", name: "Slitherlink"});

  return (
  <div className="slitherlinkSolver">
    <p>For more information about slitherlink puzzles visit <a href="https://en.wikipedia.org/wiki/Slitherlink">the wiki page</a>.</p>
  </div>);
};