export default function Items(props) {
    var items = props.items.slice(0,-1).map(e => {
        return(<span><Item item={e} />, </span>);
    });
    var lastItem = props.items.slice(-1).map(e => {
        return(<Item item={e} />);
    });

    return (<span>{items}{lastItem}</span>);
}

function Item(props) {
    var item = props.item;
    if (item.amount) {
        if (item.magical) {
            return(<span><i>{item.name}</i> ({item.amount})</span>);
        } else {
            return(<span>{item.name} ({item.amount})</span>);
        }
    } else {
        if (item.magical) {
            return(<i>{item.name}</i>);
        } else {
            return(<span>{item.name}</span>);
        }
    }
}