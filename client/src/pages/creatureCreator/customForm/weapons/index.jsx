import TraitList from "./traitList";
import Range from "./range";
import NumberInput from "../numberInput";
import WordInput from "./wordInput";

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
            <WordInput id={e.id} label="name" />
            <NumberInput location={e} label="+"/>
            (
                <TraitList id={e.id}/>
            ), 
            <b>Damage</b>
            <WordInput id={e.id} label="damageDice" />
            <WordInput id={e.id} label="damageType" />
        </div>
    );
}