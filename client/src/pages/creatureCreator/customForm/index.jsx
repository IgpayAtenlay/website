import "../../../css/creatureCreator/customForm.css";

import {useContext} from 'react';
import {CreatureContext} from "../index";

import Tags from "./tags";
import Skills from "./skills";
import Languages from "./languages";
import AddButton from "./addButton";
import Items from "./items";
import Weapons from "../creature/weapons";
import NumberInput from "./numberInput";
import MiscAbilities from "../creature/miscAbilities";
import Level from "./level";
import Name from "./name";

export default function CustomForm() {
    var {creature} = useContext(CreatureContext);

    return (<div class="customForm">
        <div class="title">
            <Name />
            <p class="level">{creature.type.toUpperCase()} <Level /></p>
        </div>
        <div class="stats">
            <Tags tags={creature.tags} />
            <div class="proficiency">
                <NumberInput label={<b>Perception</b>} name="modifier" location={creature.perception} />
                <div><b>Languages</b> <Languages languages={creature.languages} /><AddButton variable="languages" defaultValue={{language: "common"}} /></div>
                <div><b>Skills</b> <Skills /></div>
                <div>
                    <NumberInput label={<b>Str</b>} location={creature.abilities.str} />,{" "}
                    <NumberInput label={<b>Dex</b>} location={creature.abilities.dex} />,{" "}
                    <NumberInput label={<b>Con</b>} location={creature.abilities.con} />,{" "}
                    <NumberInput label={<b>Wis</b>} location={creature.abilities.wis} />,{" "}
                    <NumberInput label={<b>Int</b>} location={creature.abilities.int} />,{" "}
                    <NumberInput label={<b>Cha</b>} location={creature.abilities.cha} />
                </div>
                <div><b>Items</b> <Items items={creature.items} /></div>
            </div>
        </div>
        <div class="defenses">
            <p>
                <NumberInput label={<b>AC</b>} location={creature.defenses.ac} />;{" "}
                <NumberInput label={<b>Fort</b>} location={creature.defenses.fort} />;{" "}
                <NumberInput label={<b>Ref</b>} location={creature.defenses.ref} />;{" "}
                <NumberInput label={<b>Will</b>} location={creature.defenses.will} /></p>
            <p><NumberInput label={<b>HP</b>} location={creature.defenses.hp} /></p>
        </div>
        <div class="other">
            <p><NumberInput label={<b>Speed</b>} location={creature.speed[0]} factor={5} /> feet</p>
            <Weapons weapons={creature.weapons}/>
            <MiscAbilities other={creature.miscAbilities} />
        </div>
    </div>);
}