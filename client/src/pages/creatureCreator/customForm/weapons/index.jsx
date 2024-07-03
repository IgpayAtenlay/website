import TraitList from "./traitList";
import Range from "./range";
import NumberInput from "../numberInput";

export default function Weapons(props) {
    var weapons = props.weapons.map(e => 
        <Weapon weapon={e} key={e.id} />
    );

    return (<div>{weapons}</div>);
}

function Weapon(props) {
    var e = props.weapon;
    return (
        <div>
            <Range id={e.id} />
            &#9670;
            <input value ={e.name} />
            <NumberInput location={e} label="+"/>
            (
                <TraitList id={e.id}/>
            ), 
            <b>Damage</b>
            <input value ={e.damageDice} /><input value ={e.damageType} />
        </div>
    );
}