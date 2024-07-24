export default function Tags(props) {
    var tags = props.tags.map(e => 
        <p className={e.color} key={e.id}>{e.text.toUpperCase()}</p>
    );

    return (<div className="tags">{tags}</div>);
}