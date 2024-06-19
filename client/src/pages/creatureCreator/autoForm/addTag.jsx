import {useContext} from 'react';
import {CreatureContext} from "../index";
import {v4} from "uuid";

export default function AddTag() {
    var tags = [
        "aberration", "aeon", "air", "angel", "animal", "archon", "astral", "azata", 
        "beast", 
        "celestial", "cold", "construct",
        "daemon", "demon", "devil", "dragon",
        "earth", "elemental", "ethereal",
        "fey", "fiend", "fire",
        "mindless"
    ];
    var tagOptions = tags.map(e => <option value={e}>{e.toUpperCase()}</option>);

    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        addTag(e.target.value);
    }

    function addTag(text) {
        if (!creature.tags.some(e => e.text === text)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                tags: prevCreature.tags.concat({
                    text: text,
                    color: "red",
                    id: v4()
                })
            }));
        }

        switch(text) {
            case "aberration":
                addSense("darkvision");
                addLanguage("aklo");
                break;
            case "aeon":
                addTag("monitor");
                addLanguage("utopian");
                break;
            case "air":
                addLanguage("sussuran");
                addSpeed("fly");
                break;
            case "angel":
                addTag("celestial");
                addTag("holy");
                addSpeed("fly");
                addMiscAbilities("aura", "Angels each have a unique aura based on how they serve as messengers and how they deliver those messages.");
                addMiscAbilities("rituals", "angelic messenger");
                break;
            case "animal":
                deleteLanguages();
                changeAbility("int", "terrible");
                break;
            case "archon":
                addTag("celestial");
                addTag("holy");
                addMiscAbilities("virtue ability", "Archons each represent a specific virtue, like courage or hope, and have a special ability based on the virtue they represent.");
                break;
            case "astral":
                addSense("darkvision");
                break;
            case "azata":
                addTag("celestial");
                addTag("holy");
                addWeakness("cold iron");
                addMiscAbilities("Freedom Ability", "Azatas each represent a specific freedom, like free expression or free love, and have a special ability based on the freedom they represent.");
                break;
            case "beast":
                changeAbility("int", "terrible");
                break;
            case "celestial":
                addTag("holy");
                addSense("darkvision");
                addLanguage("empyrean");
                addWeakness("unholy");
                addMiscAbilities("holy strikes", "all your strikes have the trait holy");
                addMiscAbilities("saves vs magic", "you have a +1 status bonus to all saves vs. magic");
                break;
            case "cold":
                addImmunity("cold");
                addResistance("cold");
                break;
            case "construct":
                addTag("mindless");
                addImmunity("bleed");
                addImmunity("death effects");
                addImmunity("disease");
                addImmunity("doomed");
                addImmunity("drained");
                addImmunity("fatigued");
                addImmunity("healing");
                addImmunity("nonlethal attacks");
                addImmunity("paralyzed");
                addImmunity("poison");
                addImmunity("sickened");
                addImmunity("spirit");
                addImmunity("unconscious");
                addImmunity("vitality");
                addImmunity("void");
                break;
            case "daemon":
                addTag("fiend");
                addTag("unholy");
                addLanguage("daemonic");
                addLanguage("telepathy 100 feet");
                addImmunity("death effects");
                addMiscAbilities("Death Ability", "Daemons each represent a specific kind of death, like death by disease or starvation, and have a special ability based on the method of death they represent.");
                break;
            case "demon":
                addTag("fiend");
                addTag("unholy");
                addLanguage("chthonian");
                addLanguage("telepathy 100 feet");
                changeDefense("hp", "high");
                addWeakness("cold iron");
                addMiscAbilities("Sin Vulnerability", "Demons each represent a specific sin, like envy or wrath, and have a special vulnerability based on the sin they represent. This should be something the PCs can exploit through their actions, which should then deal mental damage to the demon. The amount of damage should be based on how easy the vulnerability is to exploit.");
                addMiscAbilities("Divine Innate Spells", "5th-rank translocate and at-will 4th-rank translocate");
                addMiscAbilities("Rituals", "demonic pact");
                addMiscAbilities("Sin Ability", "Demons also have a special ability based on the sin they represent, which either makes them better embody the sin or instills that sin in others.");
                break;
            case "devil":
                addTag("fiend");
                addTag("unholy");
                addLanguage("diabolic");
                addLanguage("telepathy 100 feet");
                addImmunity("fire");
                addWeakness("holy");
                addResistance("physical (except silver)");
                addResistance("poison");
                addMiscAbilities("Divine Innate Spells", "one 5th-rank translocate and at-will 4th-rank translocate");
                addMiscAbilities("Rituals", "diabolic pact");
                addMiscAbilities("Infernal", "Hierarchy Ability Devils each have an ability corresponding to the role they play in the infernal hierarchy, typically focused around control or being controlled.");
                break;
            case "dragon":
                addSense("darkvision");
                addLanguage("draconic");
                addSpeed("fly");
                addMiscAbilities("Dragon Breath", "Many dragons have an activity to exhale magical, damaging energy, with specifics determined by their theme.");
                break;
            case "earth":
                addSense("tremorsense");
                addLanguage("petran");
                addSpeed("burrow");
                break;
            case "elemental":
                addSense("darkvision");
                addImmunity("bleed");
                addImmunity("paralyzed");
                addImmunity("poison");
                addImmunity("sleep");
                break;
            case "ethereal":
                addSense("darkvision");
                break;
            case "fey":
                addSense("low-light vision");
                addLanguage("aklo");
                addLanguage("fey");
                addWeakness("cold iron");
                break;
            case "fiend":
                addTag("unholy");
                addSense("darkvision");
                addWeakness("holy");
                addMiscAbilities("Saves", "+1 status bonus to all saves vs. magic");
                addMiscAbilities("Unholy Strikes", "strikes typically have the unholy trait");
                break;
            case "fire":
                addLanguage("pyric");
                addImmunity("fire");
                addResistance("cold");
                addMiscAbilities("Fire Strikes", "strikes typically deal fire damage");
                break;
            case "mindless":
                addImmunity("mental");
                break;
            default:
                break;
        }
    }

    function addSense(sense) {
        if (!creature.senses.some(e => e.type === sense)) {
            var senseObject;
            if (sense === "motion sense") {
                senseObject = {
                    type: sense,
                    precision: "precise",
                    distance: 60,
                    id: v4()
                }
            } else if (sense === "lifesense") {
                senseObject = {
                    type: sense,
                    distance: 60,
                    id: v4()
                }
            } else {
                senseObject = {
                    type: sense,
                    id: v4()
                };
            }
            setCreature(prevCreature => ({
                ...prevCreature,
                senses: prevCreature.senses.concat(senseObject)
            }));
        }
    }
    
    function addLanguage(language) {
        if (!creature.languages.some(e => e.language === language)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                languages: prevCreature.languages.concat({
                    language: language,
                    id: v4()
                })
            }));
        }
    }

    function addSpeed(type) {
        if (!creature.speed.some(e => e.type === type)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                speed: prevCreature.speed.concat({
                    type: type,
                    speed: 30,
                    id: v4()
                })
            }));
        }
    }

    function deleteLanguages() {
        setCreature(prevCreature => ({
            ...prevCreature,
            languages: []
        }));
    }

    function changeAbility(name, scale) {
        setCreature(prevCreature => ({
            ...prevCreature,
            abilities: {
                ...prevCreature.abilities,
                [name]: {
                    ...prevCreature.abilities[name],
                    scale: scale
                }
            }
        }));
    }

    function changeDefense(name, scale) {
        setCreature(prevCreature => ({
            ...prevCreature,
            defenses: {
                ...prevCreature.defenses,
                [name]: {
                    ...prevCreature.defenses[name],
                    scale: scale
                }
            }
        }));
    }

    function addWeakness(type) {
        if (!creature.defenses.weaknesses.some(e => e.type === type)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                defenses: {
                    ...prevCreature.defenses,
                    weaknesses: prevCreature.defenses.weaknesses.concat({
                        type: type,
                        amount: 5,
                        id: v4()
                    })
                }
            }));
        }
    }

    function addResistance(type) {
        if (!creature.defenses.resistances.some(e => e.type === type)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                defenses: {
                    ...prevCreature.defenses,
                    resistances: prevCreature.defenses.resistances.concat({
                        type: type,
                        amount: 5,
                        id: v4()
                    })
                }
            }));
        }
    }

    function addImmunity(type) {
        if (!creature.defenses.immunities.some(e => e.type === type)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                defenses: {
                    ...prevCreature.defenses,
                    immunities: prevCreature.defenses.immunities.concat({
                        type: type,
                        id: v4()
                    })
                }
            }));
        }
    }

    function addMiscAbilities(name, description) {
        if (!creature.miscAbilities.some(e => e.name === name)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                miscAbilities: prevCreature.miscAbilities.concat({
                    name: name,
                    description: description,
                    id: v4()
                })
            }));
        }
    }

    return (
        <select class="red" value="add tag" onChange={handleChange}>
            <option value="add tag">ADD TAG</option>
            {tagOptions}
        </select>
    );
}

