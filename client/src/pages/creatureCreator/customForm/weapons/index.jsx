import TraitList from "./traitList";
import Range from "./range";
import NumberInput from "../numberInput";
import WordInput from "./wordInput";
import AddButton from "../addButton";
import DeleteButton from "../deleteButton";

export default function Weapons(props) {
    var weapons = props.weapons.map(e => 
        <Weapon weapon={e} key={e.id} />
    );

    return (
        <div>
            {weapons}
            <AddButton 
                variable="weapons" 
                defaultValue={{
                    name: "staff",
                    range: "melee",
                    modifier: 9,
                    traits: [{name: "two-hand d8"}],
                    damageDice: "1d4",
                    damageType: "bludgeoning"
                }}
            />
        </div>
    );
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
            <DeleteButton id={e.id} variable="weapons" />
        </div>
    );
}