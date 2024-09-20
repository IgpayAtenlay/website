export default function Traits(props) {
    console.log("traits");
    
    var traits = props.traits.map(e => 
        <p className={e.color} key={e.id}>{e.text.toUpperCase()}</p>
    );

    return (<div className="traits">{traits}</div>);
}