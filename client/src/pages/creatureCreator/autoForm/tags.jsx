import {useContext} from 'react';
import {CreatureContext} from "../index";
import {sizes} from "../variables";

import AddTag from './addTag';

export default function Tags(props) {
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
    var sizeOptions = sizes.map(e => <option key={e} value={e}>{e.toUpperCase()}</option>);

    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        var value = e.target.value.toLowerCase();
        var index = creature.tags.findIndex(a => a.id === e.target.id);

        setCreature(prevCreature => ({
            ...prevCreature,
            tags: prevCreature.tags.with(index, {
                ...prevCreature.tags[index],
                text: value
            })
        }));
    }
    
    return (
        <select class={props.color} id={props.id} value={props.text} onChange={handleChange} style={{width: (props.text.length * 4 / 5 + 2.5) + "em"}} >
            {sizeOptions}
        </select>
    );
}

function Tag(props) {
    var {setCreature} = useContext(CreatureContext);

    function handleClick(e) {
        setCreature(prevCreature => ({
            ...prevCreature,
            tags: prevCreature.tags.filter(a => a.id !== e.target.id)
        }));
    }

    return (<button class={props.color} id={props.id} onClick={handleClick}>{props.text.toUpperCase()}</button>);
}