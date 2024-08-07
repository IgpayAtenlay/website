export default function ActionSymbol(props) {
    var numOfActions = props.num;

    if (numOfActions === "1") {
        return (
            <span class="icon" role="img" aria-label="1 action">&#9670;</span>
        );
    } else {
        return <span />
    }
}