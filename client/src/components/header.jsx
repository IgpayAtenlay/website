export default function Header() {
	return (
	<header>
		<a class="logo" href="/" title="Melissa Home" aria-label="Melissa Home">
			<img src="assets/images/inverseLogo.svg" focusable="false" aria-hidden="true" alt="logo"/>
			Melissa
		</a>
		
		<nav class="links">
			<a href="/">Home</a>
			<a href="/about">About</a>
		</nav>
	</header>);
};