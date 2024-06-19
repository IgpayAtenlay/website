import {useContext} from 'react';
import {CreatureContext} from "../index";
import {v4} from "uuid";

export default function AddTag() {

    var traits = {
        aberration: {
            sense: "darkvision",
            language: "aklo"
        },
        aeon: {
            trait: "monitor",
            language: "utopian"
        },
        air: {
            language: "sussuran",
            speed: "fly"
        },
        angel: {
            trait: "celestial",
            speed: "fly",
            miscAbilities: [
                {
                    name: "aura",
                    description: "Angels each have a unique aura based on how they serve as messengers and how they deliver those messages."
                },
                {
                    name: "rituals",
                    description: "angelic messenger"
                }
            ]
        },
        animal: {
            language: "delete",
            ability: {
                name: "int",
                scale: "terrible"
            }
        },
        archon: {
            trait: "celestial",
            miscAbilities: {
                name: "virtue ability",
                description: "Archons each represent a specific virtue, like courage or hope, and have a special ability based on the virtue they represent."
            }
        },
        astral: {
            sense: "darkvision"
        },
        azata: {
            trait: "celestial",
            weakness: "cold iron",
            miscAbilities: {
                name: "Freedom Ability",
                description: "Azatas each represent a specific freedom, like free expression or free love, and have a special ability based on the freedom they represent."
            }
        },
        beast: {},
        celestial: {
            trait: "holy",
            sense: "darkvision",
            language: "empyrean",
            weakness: "unholy",
            miscAbilities: [
                {
                    name: "holy strikes",
                    description: "all your strikes have the trait holy"
                },
                {
                    name: "saves vs magic",
                    description: "you have a +1 status bonus to all saves vs. magic"
                }
            ]
        },
        cold: {
            immunity: "cold",
            resistance: "cold"
        },
        construct: {
            trait: "mindless",
            immunity: [
                "bleed", "death effects", "disease", "doomed", "drained", "fatigued", "healing", "nonlethal attacks",
                "paralyzed", "poison", "sickened", "spirit", "unconscious", "vitality", "void"
            ]
        },
        daemon: {
            trait: "fiend",
            language: ["daemonic", "telepathy 100 feet"],
            immunity: "death effects",
            miscAbilities: {
                name: "Death Ability",
                description: "Daemons each represent a specific kind of death, like death by disease or starvation, and have a special ability based on the method of death they represent."
            }
        },
        demon: {
            trait: "fiend",
            language: ["chthonian", "telepathy 100 feet"],
            defense: {
                name: "hp",
                scale: "high"
            },
            weakness: "cold iron",
            miscAbilities: [
                {
                    name: "Sin Vulnerability",
                    description: "Demons each represent a specific sin, like envy or wrath, and have a special vulnerability based on the sin they represent. This should be something the PCs can exploit through their actions, which should then deal mental damage to the demon. The amount of damage should be based on how easy the vulnerability is to exploit."
                },
                {
                    name: "Divine Innate Spells",
                    description: "5th-rank translocate and at-will 4th-rank translocate"
                },
                {
                    name: "Rituals",
                    description: "demonic pact"
                },
                {
                    name: "Sin Ability",
                    description: "Demons also have a special ability based on the sin they represent, which either makes them better embody the sin or instills that sin in others."
                }
            ]
        },
        devil: {
            trait: "fiend",
            language: ["diabolic", "telepathy 100 feet"],
            immunity: "fire",
            weakness: "holy",
            resistance: ["physical (except silver)", "poison"],
            miscAbilities: [
                {
                    name: "Divine Innate Spells",
                    description: "one 5th-rank translocate and at-will 4th-rank translocate"
                },
                {
                    name: "Rituals",
                    description: "diabolic pact"
                },
                {
                    name: "Infernal",
                    description: "Hierarchy Ability Devils each have an ability corresponding to the role they play in the infernal hierarchy, typically focused around control or being controlled."
                }
            ]
        },
        dragon: {
            sense: "darkvision",
            language: "draconic",
            speed: "fly",
            miscAbilities: {
                name: "Dragon Breath",
                description: "Many dragons have an activity to exhale magical, damaging energy, with specifics determined by their theme."
            }
        },
        earth: {
            sense: "tremorsense",
            language: "petran",
            speed: "burrow"
        },
        elemental: {
            sense: "darkvision",
            immunity: ["bleed", "paralyzed", "poison", "sleep"]
        },
        ethereal: {
            sense: "darkvision"
        },
        fey: {
            sense: "low-light vision",
            language: ["aklo", "fey"],
            weakness: "cold iron"
        },
        fiend: {
            trait: "unholy",
            sense: "darkvision",
            weakness: "holy",
            miscAbilities: [
                {
                    name: "Saves",
                    description: "+1 status bonus to all saves vs. magic"
                },
                {
                    name: "Unholy Strikes",
                    description: "strikes typically have the unholy trait"
                }
            ]
        },
        fire: {
            language: "pyric",
            immunity: "fire",
            resistance: "cold",
            miscAbilities: {
                name: "Fire Strikes",
                description: "strikes typically deal fire damage"
            }
        },
        fungus: {
            trait: "mindless",
            weakness: ["slashing", "fire"]
        },
        giant: {
            trait: ["large", "humanoid"],
            sense: "low-light vision",
            language: "jotun"
        },
        humanoid: {},
        incorporeal: {
            ability: {
                name: "str",
                number: -5
            },
            defense: [
                {
                    name: "hp",
                    scale: "terrible"
                },
                {
                    name: "ac",
                    scale: "low"
                }
            ],
            immunity: ["disease", "paralyzed", "poison", "precision"],
            resistance: ["all damage (except force, ghost touch, or spirit)", "non-magical (double resistance)"],
            miscAbilities: {
                name: "magical strikes",
                description: "magical trait, typically low or moderate damage"
            }
        },
        metal: {
            language: "talican"
        },
        mindless: {
            immunity: "mental"
        },
        monitor: {
            sense: "darkvision"
        },
        ooze: {
            trait: "mindless",
            sense: ["motion sense", "no vision"],
            defense: [
                {
                    name: "ac",
                    scale: "terrible"
                },
                {
                    name: "hp",
                    scale: "extreme"
                }
            ],
            immunity: ["critical hits", "precision", "unconscious", "acid", "visual effects"]
        },
        plant: {
            trait: "mindless",
            sense: "low-light vision",
            weakness: "fire"
        },
        protean: {
            trait: "monitor",
            language: "protean",
            resistance: ["precision", "protean anatomy"],
            miscAbilities: [
                {
                    name: "protean anatomy",
                    description: "This creature's vital organs shift and change shape and position constantly. Immediately after this creature takes acid, electricity, or sonic damage, it gains the listed amount of resistance to that damage type. This lasts for 1 hour or until the next time the protean takes damage of one of the other types (in which case its resistance changes to match that type), whichever comes first."
                },
                {
                    name: "Divine Innate Spells",
                    description: "constant unfettered movement"
                },
                {
                    name: "Change Shape",
                    description: "Some sort of shape change ability"
                }
            ]
        },
        psychopomp: {
            trait: "monitor",
            sense: "lifesense",
            language: "requian",
            immunity: ["death effects", "disease"],
            resistance: ["poison", "void"],
            miscAbilities: {
                name: "Spirit Touch",
                description: "This creature's Strikes affect incorporeal creatures with the effects of a ghost touch property rune and deal 1d6 void damage to living creatures and 1d6 vitality damage to undead."
            }
        },
        spirit: {
            trait: ["incorporeal", "undead"]
        },
        swarm: {
            trait: "large",
            defense: {
                name: "hp",
                scale: "low"
            },
            immunity: ["precision", "swarm mind"],
            weakness: ["area damage", "splash damage"],
            resistance: ["physical", "usually one physical type has lower or no resistance"]
        },
        undead: {
            trait: ["unholy", "mindless"],
            sense: "darkvision",
            immunity: ["death effects", "disease", "paralyze", "poison", "sleep", "unconscious"],
            miscAbilities: {
                name: "void healing",
                description: "void healing"
            }
        },
        water: {
            language: "thalassic",
            speed: "swim"
        },
        wood: {
            language: "muan",
            weakness: ["fire", "slashing"]
        }
    }

    var sizes = ["tiny", "small", "medium", "large", "huge", "gargantuan"];

    var traitOptions = Object.keys(traits).map(e => <option value={e}>{e.toUpperCase()}</option>);

    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        addTrait(e.target.value);
    }

    function addTrait(trait) {
        if (sizes.includes(trait)) {
            if (creature.tags.some(e => sizes.includes(e.text))) {
                var index = creature.tags.findIndex(e => sizes.includes(e.text));
                setCreature(prevCreature => ({
                    ...prevCreature,
                    tags: prevCreature.tags.with(index, {
                        ...prevCreature.tags[index],
                        text: trait
                    })
                }));
            } else {
                setCreature(prevCreature => ({
                    ...prevCreature,
                    tags: prevCreature.tags.concat({
                        text: trait,
                        color: "green",
                        id: v4()
                    })
                }));
            }
        } else if (!creature.tags.some(e => e.text === trait)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                tags: prevCreature.tags.concat({
                    text: trait,
                    color: "red",
                    id: v4()
                })
            }));
        }

        if (trait in traits) {
            if (traits[trait].trait) {
                if (traits[trait].trait instanceof Array) {
                    traits[trait].trait.forEach(e => addTrait(e));
                } else {
                    addTrait(traits[trait].trait);
                }
            }

            if (traits[trait].language) {
                addLanguage(traits[trait].language);
            }

            if (traits[trait].sense) {
                addSense(traits[trait].sense);
            }

            if (traits[trait].speed) {
                addSpeed(traits[trait].speed);
            }

            if (traits[trait].weakness) {
                addWeakness(traits[trait].weakness);
            }

            if (traits[trait].resistance) {
                addResistance(traits[trait].resistance);
            }

            if (traits[trait].immunity) {
                addImmunity(traits[trait].immunity);
            }

            if (traits[trait].ability) {
                changeAbility(traits[trait].ability);
            }

            if (traits[trait].defense) {
                changeDefense(traits[trait].defense);
            }

            if (traits[trait].miscAbilities) {
                addMiscAbilities(traits[trait].miscAbilities);
            }
        }
    }

    function addSense(senses) {
        if (!(senses instanceof Array)) {
            senses = [senses];
        }
        senses.forEach(sense => {
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
        });
    }
    
    function addLanguage(languages) {
        if (languages === "delete"){
            deleteLanguages();
        } else {
            if (!(languages instanceof Array)) {
                languages = [languages];
            }
            languages.forEach(language => {
                if (!creature.languages.some(e => e.language === language)) {
                    setCreature(prevCreature => ({
                        ...prevCreature,
                        languages: prevCreature.languages.concat({
                            language: language,
                            id: v4()
                        })
                    }));
                }
            })
        }
    }

    function addSpeed(speed) {
        if (!(speed instanceof Array)) {
            speed = [speed];
        }
        speed.forEach(type => {
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
        });
    }

    function deleteLanguages() {
        setCreature(prevCreature => ({
            ...prevCreature,
            languages: []
        }));
    }

    function changeAbility(abilities) {
        if (!(abilities instanceof Array)) {
            abilities = [abilities];
        }
        abilities.forEach(ability => {
            setCreature(prevCreature => ({
                ...prevCreature,
                abilities: {
                    ...prevCreature.abilities,
                    [ability.name]: {
                        ...prevCreature.abilities[ability.name],
                        scale: ability.scale
                    }
                }
            }));
        });
    }

    function changeDefense(defenses) {
        if (!(defenses instanceof Array)) {
            defenses = [defenses];
        }
        defenses.forEach(defense => {
            setCreature(prevCreature => ({
                ...prevCreature,
                defenses: {
                    ...prevCreature.defenses,
                    [defense.name]: {
                        ...prevCreature.defenses[defense.name],
                        scale: defense.scale
                    }
                }
            }));
        });
    }

    function addWeakness(weaknesses) {
        if (!(weaknesses instanceof Array)) {
            weaknesses = [weaknesses];
        }
        weaknesses.forEach(type => {
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
        });
    }

    function addResistance(resistances) {
        if (!(resistances instanceof Array)) {
            resistances = [resistances];
        }
        resistances.forEach(type => {
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
        });
    }

    function addImmunity(immunities) {
        if (!(immunities instanceof Array)) {
            immunities = [immunities];
        }
        immunities.forEach(type => {
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
        });
    }

    function addMiscAbilities(abilities) {
        if (!(abilities instanceof Array)) {
            abilities = [abilities];
        }
        abilities.forEach(ability => {
            if (!creature.miscAbilities.some(e => e.name === ability.name)) {
                setCreature(prevCreature => ({
                    ...prevCreature,
                    miscAbilities: prevCreature.miscAbilities.concat({
                        name: ability.name,
                        description: ability.description,
                        id: v4()
                    })
                }));
            }
        });
    }

    return (
        <select class="red" value="add tag" onChange={handleChange}>
            <option value="add tag">ADD TAG</option>
            {traitOptions}
        </select>
    );
}

