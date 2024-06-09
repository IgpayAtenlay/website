import "../../css/creatureCreator.css";
import Tag from "./tag";

export default function CreatureCreator() {
    return (<div class="creatureCreator">
        <div class="title">
            <p class="name">NAME</p>
            <p class="level">CREATURE 5</p>
        </div>
        <div class="stats">
            <div class="tags">
                <Tag text="N" color="orange"/>
                <Tag text="MEDIUM" color="green"/>
                <Tag text="HUMAN" color="red"/>
                <Tag text="HUMANOID" color="red"/>
            </div>
            <div class="proficiency">
                <p><b>Perception</b> +13</p>
                <p><b>Languages</b> Common</p>
                <p><b>Skills</b> Intimidation +9, Medicine +13, Plague Lore +13</p>
                <p><b>Str</b> +0, <b>Dex</b> +1, <b>Con</b> +4, <b>Int</b> +2, <b>Wis</b> +4, <b>Cha</b> +2</p>
                <p><b>Items</b> crossbow (10 bolts), healer's tools</p>
            </div>
        </div>
        <div class="defenses">
            <p><b>AC</b> 20; <b>Fort</b> +13, <b>Ref</b> +8, <b>Will</b> +13</p>
            <p><b>HP</b> 73</p>
        </div>
        <div class="other">
            <p><b>Speed</b> 25 feet</p>
            <p><b>Melee</b> &#9670; staff +9 (two-hand d8), <b>Damage</b> 1d4 bludgeoning</p>
            <p><b>Ranged</b> &#9670; crossbow +10 (range increment 120 feet, reload 1), <b>Damage</b> 1d8 piercing</p>
            <p><b>Divine Prepared Spells</b> etc. etc. etc</p>
        </div>
    </div>);
}