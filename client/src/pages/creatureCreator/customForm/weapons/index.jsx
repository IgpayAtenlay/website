import startCase from "../../../../util/startCase";
import TraitList from "./traitList";

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
            <input value ={startCase(e.range)} />
            &#9670;
            <input value ={e.name} />
            +
            <input value ={e.modifier} /> (
            <TraitList id={e.id}/>
            ), 
            <b>Damage</b>
            <input value ={e.damageDice} /><input value ={e.damageType} />
        </div>
    );
}