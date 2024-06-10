import "../../../css/creatureCreator/creature.css";
import Tags from "./tags";
import Skills from "./skills";
import Languages from "./languages";
import Items from "./items";
import Weapons from "./weapons";

export default function Creature(props) {
    var creature = props.creature;
    return (<div class="creature">
        <div class="title">
            <p class="name">{creature.name.toUpperCase()}</p>
            <p class="level">{creature.type.toUpperCase()} {creature.level}</p>
        </div>
        <div class="stats">
            <Tags tags={creature.tags} />
            <div class="proficiency">
                <p><b>Perception</b> +{creature.perception}</p>
                <p><b>Languages</b> <Languages languages={creature.languages} /></p>
                <p><b>Skills</b> <Skills skills={creature.skills}/></p>
                <p><b>Str</b> +{creature.abilities.str}, <b>Dex</b> +{creature.abilities.dex}, <b>Con</b> +{creature.abilities.con}, <b>Int</b> +{creature.abilities.int}, <b>Wis</b> +{creature.abilities.wis}, <b>Cha</b> +{creature.abilities.cha}</p>
                <p><b>Items</b> <Items items={creature.items} /></p>
            </div>
        </div>
        <div class="defenses">
            <p><b>AC</b> {creature.defences.ac}; <b>Fort</b> +{creature.defences.fort}, <b>Ref</b> +{creature.defences.ref}, <b>Will</b> +{creature.defences.will}</p>
            <p><b>HP</b> {creature.defences.hp}</p>
        </div>
        <div class="other">
            <p><b>Speed</b> {creature.speed} feet</p>
            <Weapons weapons={creature.weapons}/>
            <p><b>Divine Prepared Spells</b> etc. etc. etc</p>
        </div>
    </div>);
}