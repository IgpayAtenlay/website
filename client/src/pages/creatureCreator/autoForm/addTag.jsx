import {useContext} from 'react';
import {CreatureContext} from "../index";
import {v4} from "uuid";
import {traits, sizes} from "../variables"

export default function AddTag() {

    var traitOptions = Object.keys(traits).map(e => <option key={e} value={e}>{e.toUpperCase()}</option>);

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
        <select class="red addTag" value="add tag" onChange={handleChange}>
            <option value="add tag">ADD TAG</option>
            {traitOptions}
        </select>
    );
}

