export default function Items(props) {
    console.log("items");

    if (!props.items) {
        return;
    }

    var items = props.items.slice(0,-1).map(e => {
        return(<span key={e.id}><Item item={e} />, </span>);
    });
    var lastItem = props.items.slice(-1).map(e => {
        return(<Item item={e} key={e.id} />);
    });

    return (<p><b>Items</b> {items}{lastItem}</p>);
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