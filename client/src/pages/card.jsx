export default function Card(props) {
    if (props.image) {
        return (<a className="card" href={props.url}>
            <img src={"assets/images/" + props.image} alt="" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </a>);
    } else {
        return (<a className="card" href={props.url}>
            <img src="" alt="" />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </a>);
    }
}