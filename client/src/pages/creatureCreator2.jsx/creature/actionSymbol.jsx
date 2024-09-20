export default function ActionSymbol(props) {
    var numOfActions = props.num;

    if (numOfActions === "1" || numOfActions === 1) {
        return (
            <span className="icon" role="img" aria-label="1 action">&#9670;</span>
        );
    } else if (numOfActions === "2" || numOfActions === 2) {
        return (
            <span className="icon" role="img" aria-label="2 actions">&#9670;&#9670;</span>
        );
    } else if (numOfActions === "3" || numOfActions === 3) {
        return (
            <span className="icon" role="img" aria-label="3 actions">&#9670;&#9670;&#9670;</span>
        );
    } else if (numOfActions === "reaction") {
        return (
            <span className="icon" role="img" aria-label="reaction" style={{fontWeight: "bolder"}}>&#10558; </span>
        );
    } else if (numOfActions === "freeAction") {
        return (
            <span className="icon" role="img" aria-label="free action">&#9671;</span>
        );
    } else {
        return <span />
    }
}