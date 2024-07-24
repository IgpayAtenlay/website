import useScript from '../../components/useScript';
import "../../css/simon.css";
import { useTitle } from '../../util/title';

export default function Simon() {
  useTitle("Simon");
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