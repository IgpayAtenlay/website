export var skillModifiers = {
    extreme: [8, 9, 10, 11, 13, 15, 16, 18, 20, 21, 23, 25, 26, 28, 30, 31, 33, 35, 36, 38, 40, 41, 43, 45, 46, 48],
    high: [5, 6, 7, 8, 10, 12, 13, 15, 17, 18, 20, 22, 23, 25, 27, 28, 30, 32, 33, 35, 37, 38, 40, 42, 43, 45],
    moderate: [4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22, 24, 25, 27, 28, 30, 31, 33, 34, 36, 37, 38, 40],
    low: [2, 3, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26, 28, 29, 31, 32, 34, 35, 36, 38],
    veryLow: [1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 25, 27, 28, 29, 31, 32, 33]
}

export var sizes = ["tiny", "small", "medium", "large", "huge", "gargantuan"];

export var traits = {
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

export var skills = {
    acrobatics: "dex",
    arcana: "int",
    athletics: "str",
    crafting: "int",
    deception: "cha",
    diplomacy: "cha",
    intimidation: "cha",
    lore: "int",
    medicine: "wis",
    nature: "wis",
    occultism: "int",
    performance: "cha",
    religion: "cha",
    society: "int",
    stealth: "dex",
    survival: "wis",
    thievery: "dex"
}