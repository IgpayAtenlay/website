export default function Header() {
	return (
	<header role="banner">
		<a className="logo" href="/" title="MPC Home" aria-label="MPC Home">
			<img src="assets/images/inverseLogo.svg" focusable="false" aria-hidden="true" alt="logo"/>
			MPC
		</a>
		
		<nav className="links">
			<a href="/">Home</a>
			<a href="/projects">Projects</a>
			<a href="/about">About</a>
		</nav>
	</header>);
};