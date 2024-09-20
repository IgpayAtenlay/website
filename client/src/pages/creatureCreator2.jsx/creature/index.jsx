import "../../../css/creatureCreator/creature.css";
import Traits from "./traits";
import Skills from "./skills";
import Languages from "./languages";
import Items from "./items";
import Attacks from "./attacks";
import Abilities from "./abilities";

export default function Creature(props) {
    console.log("creature");
    console.log(props.creature);

    var creature = props.creature;
    return (<div className="creature">
        <div className="title">
            <p className="name">{creature.name && creature.name.toUpperCase()}</p>
            <p className="level">{creature.type.toUpperCase()} {creature.level}</p>
        </div>
        <div className="stats">
            <Traits traits={creature.traits} />
            <div className="proficiency">
                <p><b>Perception</b> +{creature.perception.modifier}</p>
                <Languages languages={creature.languages} />
                <p><b>Skills</b> <Skills skills={creature.skills}/></p>
                <p><b>Str</b> +{creature.attributes.str.modifier}, <b>Dex</b> +{creature.attributes.dex.modifier}, <b>Con</b> +{creature.attributes.con.modifier}, <b>Int</b> +{creature.attributes.int.modifier}, <b>Wis</b> +{creature.attributes.wis.modifier}, <b>Cha</b> +{creature.attributes.cha.modifier}</p>
                <Items items={creature.items} />
            </div>
        </div>
        <div className="defenses">
            <p><b>AC</b> {creature.defenses.ac.modifier}; <b>Fort</b> +{creature.defenses.fort.modifier}, <b>Ref</b> +{creature.defenses.ref.modifier}, <b>Will</b> +{creature.defenses.will.modifier}</p>
            <p><b>HP</b> {creature.defenses.hp.modifier}</p>
        </div>
        <div className="other">
            <p><b>Speed</b> {creature.speed[0].modifier} feet</p>
            <Attacks attacks={creature.attacks} />
            <Abilities abilities={creature.abilities} />
        </div>
    </div>);
}