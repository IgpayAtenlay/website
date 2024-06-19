import AddButton from "./addButton";
import startCase from "../../../util/startCase";
import {useContext} from 'react';
import {CreatureContext} from "../index";

export default function Tags(props) {
    var tags = props.tags.map(e => 
        <Tag color={e.color} text={e.text} id={e.id} key={e.id}/>
    );

    return (
        <div class="tags">
            {tags}
            <AddButton 
                variable="tags" 
                defaultValue={{
                    text: "", 
                    color: "green"
                }}
            />
        </div>
    );
}

function Tag(props) {
    var colors = ["orange", "green", "red"];
    var {creature, setCreature} = useContext(CreatureContext);
    
    var colorOptions = colors.map(e => 
        <option class={e} value={e} key={e}>{startCase(e)}</option>
    );

    function handleChangeText(e) {
        var value = e.target.value.toLowerCase();
        var index = creature.tags.findIndex(a => a.id === e.target.id);
        
        if (value === "delete") {
            setCreature(prevCreature => ({
                ...prevCreature,
                tags: prevCreature.tags.filter(a => a.id !== e.target.id)
            }));
        } else {
            setCreature(prevCreature => ({
                ...prevCreature,
                tags: prevCreature.tags.with(index, 
                    {
                        ...prevCreature.tags[index],
                        text: value
                    }
                )
            }));
        }
    }

    function handleChangeColor(e) {
        var value = e.target.value.toLowerCase();
        var index = creature.tags.findIndex(a => a.id === e.target.id);
        
        if (value === "delete") {
            setCreature(prevCreature => ({
                ...prevCreature,
                tags: prevCreature.tags.filter(a => a.id !== e.target.id)
            }));
        } else {
            setCreature(prevCreature => ({
                ...prevCreature,
                tags: prevCreature.tags.with(index, 
                    {
                        ...prevCreature.tags[index],
                        color: value
                    }
                )
            }));
        }
    }

    return (
    <div>
        <input class={props.color} id={props.id} onChange={handleChangeText} value={props.text.toUpperCase()} />
        <select class={props.color} id={props.id} value={props.color} onChange={handleChangeColor}>
            {colorOptions}
            <option value="delete">Delete</option>
        </select>
    </div>);
    }

