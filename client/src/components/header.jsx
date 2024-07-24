export default function Header() {
	return (
	<header>
		<a className="logo" href="/" title="Melissa Home" aria-label="Melissa Home">
			<img src="assets/images/inverseLogo.svg" focusable="false" aria-hidden="true" alt="logo"/>
			Melissa
		</a>
		
		<nav className="links">
			<a href="/">Home</a>
			<a href="/projects">Projects</a>
			<a href="/about">About</a>
		</nav>
	</header>);
};