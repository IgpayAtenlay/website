import {useContext} from 'react';
import {CreatureContext} from "../index";
import AddButton from './addButton';
import DeleteButton from './deleteButton';

export default function Items() {
    var {creature} = useContext(CreatureContext);
    
    var items = creature.items.slice(0,-1).map(e => {
        return(<span key={e.id}><Item item={e} />, </span>);
    });
    var lastItem = creature.items[(creature.items.length - 1)]
    items = items.concat(
        <Item item={lastItem} key={lastItem.id}/>
    )

    return (
        <span>
            {items}
            <AddButton variable="items" defaultValue={{
                name: "bow",
                amount: "5 arrows"
            }}/>
        </span>
    );
}

function Item(props) {
    var {creature, setCreature} = useContext(CreatureContext);
    
    function handleChange(e) {
        var id = e.target.id;
        var value = e.target.value.toLowerCase();
        if (id.includes("amount")) {
            var type = "amount"
        } else if (id.includes("name")) {
            type = "name";
        } else {
            type = "magical";
            value = e.target.checked;
        }
        
        var index = creature.items.findIndex(a => a.id + type === e.target.id);

        if (value === "delete") {
            setCreature(prevCreature => ({
                ...prevCreature,
                items: prevCreature.items.filter(a => a.id + type !== e.target.id)
            }));
        } else {
            setCreature(prevCreature => ({
                ...prevCreature,
                items: prevCreature.items.with(index, 
                    {
                        ...prevCreature.items[index],
                        [type]: value
                    }
                )
            }));
        }
    }

    return(
        <span className="item">
            <input 
                id={props.item.id + "name"}
                onChange={handleChange}
                value={props.item.name} 
            />
            (
                <input
                id={props.item.id + "amount"}
                onChange={handleChange}
                value={props.item.amount}
            />
            ) magical: 
            <input 
                id={props.item.id + "magical"}
                onChange={handleChange}
                type="checkbox" 
                checked={props.item.magical}
            />
            <DeleteButton variable="items" id={props.item.id} />
        </span>);
}