import { GithubContext } from "../App";
import { useContext } from 'react';

export default function Footer() {
  var {github} = useContext(GithubContext);

  return (
    <footer>
      <a href={"https://github.com/IgpayAtenlay" + github.link} target="_blank" rel="noopener noreferrer">{github.name + " Github"}</a>
    </footer>
  );
};