export default function Website() {
	return (
	<div>
		<h1>Website</h1>
		<h2>Accessibility</h2>
			<p>
				This website is compatable to WCAG guidelines for accessibility. Examples of accessibility in this website:
				<ul>
					<li>Important images have alt text</li>
					<li>Decorative images do not have alt text</li>
					<li>Regions provide easy navigation using screenreaders</li>
					<li>Link purpose can be determined by link text</li>
				</ul>
				If you would like to know more about WCAG guidelines, see here: <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">WCAG guidelines</a>.
			</p>
		<h2>Visuals, Styling, and CSS</h2>
			<p>
				This website looks good because it has a cohesive style. 
				There are two main colors to the webpage: blue and purple. 
				These two colors can be seen most prominantly in the header. 
				However, they can be found throughout the webpage. Links
				are the same color blue. Backgrounds of certain parts, like
				the cards on the home page, are lighter versions of the same
				two colors. There are also two accent colors that can be seen
				in various places throughout the website. They are green and 
				red.
			</p>
			<p>
				Another cohesive styling choice is the header. All the pages
				on this website share the same header. This was made easier through
				the use of EJS, which allowed me to create a single file and include 
				it on the top of each page with only a single line of code.
			</p>
	</div>);
};