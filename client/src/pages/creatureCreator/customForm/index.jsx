import "../../../css/creatureCreator/customForm.css";

import {useContext} from 'react';
import {CreatureContext} from "../index";

import Tags from "./tags";
import Skills from "./skills";
import Languages from "./languages";
import AddButton from "./addButton";
import Items from "../creature/items";
import Weapons from "../creature/weapons";
import NumberInput from "./numberInput";
import MiscAbilities from "../creature/miscAbilities";

export default function CustomForm() {
    var {creature} = useContext(CreatureContext);

    return (<div class="customForm">
        <div class="title">
            <p class="name">{creature.name.toUpperCase()}</p>
            <p class="level">{creature.type.toUpperCase()} {creature.level}</p>
        </div>
        <div class="stats">
            <Tags tags={creature.tags} />
            <div class="proficiency">
                <NumberInput label={<b>Perception</b>} name="perception" location={creature} />
                <div><b>Languages</b> <Languages languages={creature.languages} /><AddButton variable="languages" defaultValue={{language: "common"}} /></div>
                <div><b>Skills</b> <Skills /></div>
                <div>
                    <NumberInput label={<b>Str</b>} name={"number"} location={creature.abilities.str} />,{" "}
                    <NumberInput label={<b>Dex</b>} name={"number"} location={creature.abilities.dex} />,{" "}
                    <NumberInput label={<b>Con</b>} name={"number"} location={creature.abilities.con} />,{" "}
                    <NumberInput label={<b>Wis</b>} name={"number"} location={creature.abilities.wis} />,{" "}
                    <NumberInput label={<b>Int</b>} name={"number"} location={creature.abilities.int} />,{" "}
                    <NumberInput label={<b>Cha</b>} name={"number"} location={creature.abilities.cha} />
                </div>
                <div><b>Items</b> <Items items={creature.items} /></div>
            </div>
        </div>
        <div class="defenses">
            <p>
                <NumberInput label={<b>AC</b>} name={"number"} location={creature.defenses.ac} />;{" "}
                <NumberInput label={<b>Fort</b>} name={"number"} location={creature.defenses.fort} />;{" "}
                <NumberInput label={<b>Ref</b>} name={"number"} location={creature.defenses.ref} />;{" "}
                <NumberInput label={<b>Will</b>} name={"number"} location={creature.defenses.will} /></p>
            <p><NumberInput label={<b>HP</b>} name={"number"} location={creature.defenses.hp} /></p>
        </div>
        <div class="other">
            <p><NumberInput label={<b>Speed</b>} name={"speed"} location={creature.speed[0]} factor={5} /> feet</p>
            <Weapons weapons={creature.weapons}/>
            <MiscAbilities other={creature.miscAbilities} />
        </div>
    </div>);
}