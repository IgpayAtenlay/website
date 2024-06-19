import {useContext} from 'react';
import {CreatureContext} from "../index";

import AddTag from './addTag';

export default function Tags(props) {
    var sizes = ["tiny", "small", "medium", "large", "huge", "gargantuan"];

    var tags = props.tags.map(e => {
        if (sizes.includes(e.text)) {
            return (<Size color={e.color} key={e.id} id={e.id} text={e.text} />);
        } else {
            return (<Tag color={e.color} key={e.id} id={e.id} text={e.text}/>);
        }
    }
        
    );

    return (
        <div class="tags">
            {tags}
            <AddTag />
        </div>
    );
}

function Size(props) {
    var sizes = ["tiny", "small", "medium", "large", "huge", "gargantuan"];
    var sizeOptions = sizes.map(e => <option value={e}>{e.toUpperCase()}</option>);

    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        var value = e.target.value.toLowerCase();
        var text = creature.tags.find(a => a.id === e.target.id);
        
        text.text = value;

        setCreature(prevCreature => ({
            ...prevCreature,
            tags: prevCreature.tags
            }));
    }
    
    return (
        <select class={props.color} id={props.id} value={props.text} onChange={handleChange}>
            {sizeOptions}
        </select>
    );
}

function Tag(props) {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleClick(e) {
        var tag = creature.tags.find(a => a.id === e.target.id);

        var index = creature.tags.indexOf(tag);
        creature.tags.splice(index,1);

        setCreature(prevCreature => ({
            ...prevCreature,
            tags: prevCreature.tags
            }));
    }

    return (<button class={props.color} id={props.id} onClick={handleClick}>{props.text.toUpperCase()}</button>);
}