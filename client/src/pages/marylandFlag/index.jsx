import "../../css/marylandFlag.css";

import AbsolutePositioningFlag from "./absolutePositioningFlag";
import GridFlag from "./gridFlag";
import CanvasFlag from "./canvasFlag";

export default function MarylandFlag() {
	return(
	<div class="marylandFlag">
		<h1>Marlyland Flag with CSS</h1>
		<p>I decided to create the Maryland flag using a variety of methods in order to practice using each method and comparing the end products. 
			I like flag two the best due to the crisp and clean look, also using it without React to separate components would make the HTML 
			incredibly messy. Check them all out and see which one you prefer!</p>
		<div>
			<div>
				<h2>Version One</h2>
				<AbsolutePositioningFlag />
				<p>This version uses HTML and CSS to produce the flag. The divs are placed with absolute positioning. Since numbers are rounded, this 
					causes small white gaps when zoomed in too close.</p>
			</div>
			<div>
				<h2>Version Two</h2>
				<GridFlag />
				<p>This version uses also uses HTML and CSS to produce the flag. However, this version mostly uses grid to position the divs. This 
					prevents the gaps that occassionally occure in flag one. The smaller shapes inside the red and white corners are still achieved by 
					absolute positioning.</p>
			</div>
			<div>
				<h2>Version Three</h2>
				<CanvasFlag />
				<p>This version uses HTML, Canvas, and JavaScript to create the flag. As you can see, this version is fuzzier than the first two 
					version but the diagonals are also smoother.</p>
			</div>
		</div>
	</div>);
};