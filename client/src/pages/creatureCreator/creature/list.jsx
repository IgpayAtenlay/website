export default function Lists(props) {
    var items = props.listItems.slice(0,-1).map(e => 
        <span key={e.id}>{e.name}, </span>
    );
    var lastItem = props.listItems.slice(-1).map(e => 
        <span key={e.id}>{e.name}</span>
    );

    return (<span>{items}{lastItem}</span>);
}