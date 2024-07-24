import { GithubLinkContext } from "../App";
import { useContext } from 'react';

export default function Footer() {
  var {githubLink} = useContext(GithubLinkContext);

  return (
    <footer>
      <p>Github: <a href={"https://github.com/IgpayAtenlay" + githubLink} target="_blank" rel="noopener noreferrer">{"github.com/IgpayAtenlay" + githubLink}</a></p>
    </footer>
  );
};