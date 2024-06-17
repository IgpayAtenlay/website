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
                <p><b>Perception</b> <NumberInput name="perception" location={creature} /></p>
                <p><b>Languages</b> <Languages languages={creature.languages} /><AddButton variable="languages" defaultValue={{language: "common"}} /></p>
                <p><b>Skills</b> <Skills skills={creature.skills}/></p>
                <p>
                    <b>Str</b> <NumberInput name={"str"} location={creature.abilities} />, 
                    <b>Dex</b> <NumberInput name={"dex"} location={creature.abilities} />, 
                    <b>Con</b> <NumberInput name={"con"} location={creature.abilities} />, 
                    <b>Int</b> <NumberInput name={"int"} location={creature.abilities} />, 
                    <b>Wis</b> <NumberInput name={"wis"} location={creature.abilities} />, 
                    <b>Cha</b> <NumberInput name={"cha"} location={creature.abilities} /></p>
                <p><b>Items</b> <Items items={creature.items} /></p>
            </div>
        </div>
        <div class="defenses">
            <p>
                <b>AC</b> <NumberInput name={"ac"} location={creature.defences} />; 
                <b>Fort</b> <NumberInput name={"fort"} location={creature.defences} />; 
                <b>Ref</b> <NumberInput name={"ref"} location={creature.defences} />; 
                <b>Will</b> <NumberInput name={"will"} location={creature.defences} /></p>
            <p><b>HP</b> <NumberInput name={"hp"} location={creature.defences} /></p>
        </div>
        <div class="other">
            <p><b>Speed</b> <NumberInput name={"speed"} location={creature} factor={5} /> feet</p>
            <Weapons weapons={creature.weapons}/>
            <p><b>Divine Prepared Spells</b> etc. etc. etc</p>
        </div>
    </div>);
}