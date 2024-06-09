export default function Lists(props) {
    var items = props.listItems.slice(0,-1).map(e => 
        <span>{e}, </span>
    );
    var lastItem = props.listItems.slice(-1).map(e => 
        <span>{e}</span>
    );

    return (<span>{items}{lastItem}</span>);
}