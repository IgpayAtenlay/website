import useScript from '../../util/useScript';
import "../../css/simon.css";
import { useTitle } from '../../util/title';
import { useContext } from 'react';
import { GithubLinkContext } from '../../App';

export default function Simon() {
  useTitle("Simon");
  var {setGithubLink} = useContext(GithubLinkContext);
  setGithubLink("/website/blob/main/client/src/pages/simon/README.md");

  useScript('https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js');
  useScript('./js/simon.js');

  return (
  <div className="simon">
    <h1>Click any button to start</h1>

    <div className="container">
      <button id="one" aria-label="lowest"></button>
      <button id="two" aria-label="low"></button>
      <button id="three" aria-label="high"></button>
      <button id="four" aria-label="highest"></button>
    </div>
  </div>);
};