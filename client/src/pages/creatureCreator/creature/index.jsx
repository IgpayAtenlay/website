import "../../../css/creatureCreator/creature.css";
import Tags from "./tags";
import Skills from "./skills";
import Languages from "./languages";
import Items from "./items";
import Weapons from "./weapons";
import MiscAbilities from "./miscAbilities";

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
                <p><b>Str</b> +{creature.abilities.str.number}, <b>Dex</b> +{creature.abilities.dex.number}, <b>Con</b> +{creature.abilities.con.number}, <b>Int</b> +{creature.abilities.int.number}, <b>Wis</b> +{creature.abilities.wis.number}, <b>Cha</b> +{creature.abilities.cha.number}</p>
                <p><b>Items</b> <Items items={creature.items} /></p>
            </div>
        </div>
        <div class="defenses">
            <p><b>AC</b> {creature.defenses.ac.number}; <b>Fort</b> +{creature.defenses.fort.number}, <b>Ref</b> +{creature.defenses.ref.number}, <b>Will</b> +{creature.defenses.will.number}</p>
            <p><b>HP</b> {creature.defenses.hp.number}</p>
        </div>
        <div class="other">
            <p><b>Speed</b> {creature.speed[0].speed} feet</p>
            <Weapons weapons={creature.weapons} />
            <MiscAbilities other={creature.miscAbilities} />
        </div>
    </div>);
}