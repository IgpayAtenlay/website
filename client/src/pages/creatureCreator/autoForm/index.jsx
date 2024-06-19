import "../../../css/creatureCreator/autoForm.css";
import Tags from "./tags";
import Skills from "../creature/skills";
import Languages from "../customForm/languages";
import Items from "../creature/items";
import Weapons from "../creature/weapons";
import AddButton from "../customForm/addButton";
import MiscAbilities from "../creature/miscAbilities";

export default function Creature(props) {
    var creature = props.creature;
    return (<div class="autoForm">
        <div class="title">
            <p class="name">{creature.name.toUpperCase()}</p>
            <p class="level">{creature.type.toUpperCase()} {creature.level}</p>
        </div>
        <div class="stats">
            <Tags tags={creature.tags} />
            <div class="proficiency">
                <p><b>Perception</b> +{creature.perception}</p>
                <div><b>Languages</b> <Languages languages={creature.languages} /><AddButton variable="languages" defaultValue={{language: "common"}} /></div>
                <p><b>Skills</b> <Skills skills={creature.skills}/></p>
                <p><b>Str</b> {creature.abilities.str.scale}, <b>Dex</b> {creature.abilities.dex.scale}, <b>Con</b> {creature.abilities.con.scale}, <b>Int</b> {creature.abilities.int.scale}, <b>Wis</b> {creature.abilities.wis.scale}, <b>Cha</b> {creature.abilities.cha.scale}</p>
                <p><b>Items</b> <Items items={creature.items} /></p>
            </div>
        </div>
        <div class="defenses">
            <p><b>AC</b> {creature.defenses.ac}; <b>Fort</b> +{creature.defenses.fort}, <b>Ref</b> +{creature.defenses.ref}, <b>Will</b> +{creature.defenses.will}</p>
            <p><b>HP</b> {creature.defenses.hp}</p>
        </div>
        <div class="other">
            <p><b>Speed</b> {creature.speed[0].speed} feet</p>
            <Weapons weapons={creature.weapons}/>
            <MiscAbilities other={creature.miscAbilities} />
        </div>
    </div>);
}