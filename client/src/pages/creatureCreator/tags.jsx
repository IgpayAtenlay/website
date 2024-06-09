export default function Tags(props) {
    var tags = props.tags.map(e => 
        <p class={e.color}>{e.text.toUpperCase()}</p>
    );

    return (<div class="tags">{tags}</div>);
}