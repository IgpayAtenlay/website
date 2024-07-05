import {useContext} from 'react';
import {CreatureContext} from "../../index";
import {v4} from "uuid";

export default function TraitList(props) {
    var {creature} = useContext(CreatureContext);
    var traitList = creature.weapons.find(e => e.id === props.id).traits;

    var traits = []
    traitList.forEach(e => {
        traits = traits.concat(<Trait key={e.id + "trait"} trait={e} weaponID={props.id} />);
        traits = traits.concat(<span key={e.id + "comma"}>, </span>);
    });
    traits = traits.slice(0, -1);

    return (
        <span>
            {traits}
            <AddButton id={props.id} />
        </span>
    );
}

function Trait(props) {
    var {creature, setCreature} = useContext(CreatureContext);

    function handleChangeInput(e) {
        var [id, weaponID] = e.target.id.split(",")

        var weaponIndex = creature.weapons.findIndex(e => e.id === weaponID);
        var traitIndex = creature.weapons[weaponIndex].traits.findIndex(e => e.id === id);
        var name = e.target.value.toLowerCase();

        setCreature(prevCreature => ({
            ...prevCreature,
            weapons: prevCreature.weapons.with(weaponIndex, 
                {
                    ...prevCreature.weapons[weaponIndex],
                    traits: prevCreature.weapons[weaponIndex].traits.with(traitIndex,
                        {
                            ...prevCreature.weapons[weaponIndex].traits[traitIndex],
                            name: name
                        }
                    )
                }
            )
        }));
    }

    function handleChangeDelete(e) {
        var [id, weaponID] = e.target.id.split(",")
        var weaponIndex = creature.weapons.findIndex(e => e.id === weaponID);
        setCreature(prevCreature => ({
            ...prevCreature,
            weapons: prevCreature.weapons.with(weaponIndex, 
                {
                    ...prevCreature.weapons[weaponIndex],
                    traits: prevCreature.weapons[weaponIndex].traits.filter(e => e.id !== id)
                }
            )
        }));
    }

    return (
        <span>
        <input 
            value={props.trait.name}
            id={props.trait.id + "," + props.weaponID} 
            onChange={handleChangeInput}
        />
        <button 
            id={props.trait.id + "," + props.weaponID}
            onClick={handleChangeDelete}
        >-</button>
        </span>
    )
}

function AddButton(props) {
    var {creature, setCreature} = useContext(CreatureContext);
    var defaultValue = {
        name: "finesse",
        id: v4()
    }

    function handleChange(e) {
        var weaponIndex = creature.weapons.findIndex(a => a.id === e.target.id);

        setCreature(prevCreature => ({
            ...prevCreature,
            weapons: prevCreature.weapons.with(weaponIndex, 
                {
                    ...prevCreature.weapons[weaponIndex],
                    traits: prevCreature.weapons[weaponIndex].traits.concat(defaultValue)
                }
            )
        }));
    }

    return <button id={props.id} onClick={handleChange}>+</button>;
}