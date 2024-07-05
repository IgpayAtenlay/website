import {useContext} from 'react';
import {CreatureContext} from "../../index";


export default function Description(props) {
    var {creature, setCreature} = useContext(CreatureContext);
    var value = creature.miscAbilities.find(a => a.id === props.id).description;

    function handleChange(e) {
        var index = creature.miscAbilities.findIndex(a => a.id === e.target.id);
        var value = e.target.value;
        
        setCreature(prevCreature => ({
            ...prevCreature,
            miscAbilities: prevCreature.miscAbilities.with(index, 
                {
                    ...prevCreature.miscAbilities[index],
                    description: value
                }
            )
        }));
    }

    return (
        <textarea id={props.id} value={value} onChange={handleChange}/>
    )
}