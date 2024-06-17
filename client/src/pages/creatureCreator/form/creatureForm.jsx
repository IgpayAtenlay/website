import "../../../css/creatureCreator/creatureForm.css";

import {useContext} from 'react';
import {CreatureContext} from "../index";

import Tags from "./tags";
import Skills from "../creature/skills";
import Languages from "./languages";
import AddButton from "./addButton";
import Items from "../creature/items";
import Weapons from "../creature/weapons";
import NumberInput from "./numberInput";

export default function CreatureForm() {
    var {creature} = useContext(CreatureContext);

    return (<div class="creatureForm">
        <div class="title">
            <p class="name">{creature.name.toUpperCase()}</p>
            <p class="level">{creature.type.toUpperCase()} {creature.level}</p>
        </div>
        <div class="stats">
            <Tags tags={creature.tags} />
            <div class="proficiency">
                <NumberInput label={<b>Perception</b>} name="perception" location={creature} />
                <div><b>Languages</b> <Languages languages={creature.languages} /><AddButton variable="languages" defaultValue={{language: "common"}} /></div>
                <div><b>Skills</b> <Skills skills={creature.skills}/></div>
                <div>
                    <NumberInput label={<b>Str</b>} name={"str"} location={creature.abilities} />, 
                    <NumberInput label={<b>Dex</b>} name={"dex"} location={creature.abilities} />, 
                    <NumberInput label={<b>Con</b>} name={"con"} location={creature.abilities} />, 
                    <NumberInput label={<b>Wis</b>} name={"wis"} location={creature.abilities} />, 
                    <NumberInput label={<b>Int</b>} name={"int"} location={creature.abilities} />, 
                    <NumberInput label={<b>Cha</b>} name={"cha"} location={creature.abilities} />
                </div>
                <div><b>Items</b> <Items items={creature.items} /></div>
            </div>
        </div>
        <div class="defenses">
            <p>
                <NumberInput label={<b>AC</b>} name={"ac"} location={creature.defences} />; 
                <NumberInput label={<b>Fort</b>} name={"fort"} location={creature.defences} />; 
                <NumberInput label={<b>Ref</b>} name={"ref"} location={creature.defences} />; 
                <NumberInput label={<b>Will</b>} name={"will"} location={creature.defences} /></p>
            <p><NumberInput label={<b>HP</b>} name={"hp"} location={creature.defences} /></p>
        </div>
        <div class="other">
            <p><NumberInput label={<b>Speed</b>} name={"speed"} location={creature} factor={5} /> feet</p>
            <Weapons weapons={creature.weapons}/>
            <p><b>Divine Prepared Spells</b> etc. etc. etc</p>
        </div>
    </div>);
}