export var attributes = {
    strength: "str",
    dexterity: "dex",
    constitution: "con", 
    intelligence: "int", 
    wisdom: "wis",
    charisma: "cha"
};

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

export var skillModifiers = {
    extreme: [8, 9, 10, 11, 13, 15, 16, 18, 20, 21, 23, 25, 26, 28, 30, 31, 33, 35, 36, 38, 40, 41, 43, 45, 46, 48],
    high: [5, 6, 7, 8, 10, 12, 13, 15, 17, 18, 20, 22, 23, 25, 27, 28, 30, 32, 33, 35, 37, 38, 40, 42, 43, 45],
    moderate: [4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22, 24, 25, 27, 28, 30, 31, 33, 34, 36, 37, 38, 40],
    low: [2, 3, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26, 28, 29, 31, 32, 34, 35, 36, 38],
    veryLow: [1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 15, 16, 17, 19, 20, 21, 23, 24, 25, 27, 28, 29, 31, 32, 33]
}

export var attributeModifiers = {
    extreme: [4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 11, 13],
    high: [3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10, 10, 12],
    moderate: [2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 8, 8, 9],
    low: [0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7],
    terrible: [-5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5]
}

export var strikeModifier = {
    extreme: [10, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35, 37, 38, 40, 41, 43, 44, 46],
    high: [8, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 32, 33, 35, 36, 38, 39, 41, 42, 44],
    moderate: [6, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22, 24, 25, 27, 28, 30, 31, 33, 34, 36, 37, 39, 40, 42],
    low: [4, 4, 5, 7, 8, 9, 11, 12, 13, 15, 6, 17, 19, 20, 21, 23, 24, 25, 27, 28, 29, 31, 32, 33, 35, 36]
}

export var wirLevels = {
    minimum: [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
    maximum: [1, 3, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 23, 24, 25, 26]
}

export var creatureInput = {
    name: "bear",
    level: 3,
    archetype: "brute",
    primaryAttribute: "str",
    primarySkill: "athletics",
    secondarySkills: ["intimidation", "survival"],
    traits: ["animal"],
    size: "large",
    adjustments: [],
    wir: [],
    item: "none",
    other: {},
    spells: [],
    attacks: [
        {
            name: "Jaw",
            type: "melee"
        },
        {
            name: "Claw",
            type: "agile"
        }
    ],
    abilities: [
        {
            name: "Roar",
            actions: "reaction",
            trigger: "An ally is reduced to 0 HP",
            effect: "The bear takes the demoralize action without taking the penalty due to not sharing a language"
        },
        {
            name: "Rush",
            actions: 2,
            effect: "The bear strides twice and makes a jaw attack at the end of it's movement"
        }
    ]
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
        attributes: {
            int: {scale: "terrible"}
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
        weaknesses: "cold iron",
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
        weaknesses: "unholy",
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
        immunities: "cold",
        resistances: "cold"
    },
    construct: {
        trait: "mindless",
        immunities: [
            "bleed", "death effects", "disease", "doomed", "drained", "fatigued", "healing", "nonlethal attacks",
            "paralyzed", "poison", "sickened", "spirit", "unconscious", "vitality", "void"
        ]
    },
    daemon: {
        trait: "fiend",
        language: ["daemonic", "telepathy 100 feet"],
        immunities: "death effects",
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
        weaknesses: "cold iron",
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
        immunities: "fire",
        weaknesses: "holy",
        resistances: ["physical (except silver)", "poison"],
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
        immunities: ["bleed", "paralyzed", "poison", "sleep"]
    },
    ethereal: {
        sense: "darkvision"
    },
    fey: {
        sense: "low-light vision",
        language: ["aklo", "fey"],
        weaknesses: "cold iron"
    },
    fiend: {
        trait: "unholy",
        sense: "darkvision",
        weaknesses: "holy",
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
        immunities: "fire",
        resistances: "cold",
        miscAbilities: {
            name: "Fire Strikes",
            description: "strikes typically deal fire damage"
        }
    },
    fungus: {
        trait: "mindless",
        weaknesses: ["slashing", "fire"]
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
        immunities: ["disease", "paralyzed", "poison", "precision"],
        resistances: ["all damage (except force, ghost touch, or spirit)", "non-magical (double resistances)"],
        miscAbilities: {
            name: "magical strikes",
            description: "magical trait, typically low or moderate damage"
        }
    },
    metal: {
        language: "talican"
    },
    mindless: {
        immunities: "mental"
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
        immunities: ["critical hits", "precision", "unconscious", "acid", "visual effects"]
    },
    plant: {
        trait: "mindless",
        sense: "low-light vision",
        weaknesses: "fire"
    },
    protean: {
        trait: "monitor",
        language: "protean",
        resistances: ["precision", "protean anatomy"],
        miscAbilities: [
            {
                name: "protean anatomy",
                description: "This creature's vital organs shift and change shape and position constantly. Immediately after this creature takes acid, electricity, or sonic damage, it gains the listed amount of resistances to that damage type. This lasts for 1 hour or until the next time the protean takes damage of one of the other types (in which case its resistances changes to match that type), whichever comes first."
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
        immunities: ["death effects", "disease"],
        resistances: ["poison", "void"],
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
        immunities: ["precision", "swarm mind"],
        weaknesses: ["area damage", "splash damage"],
        resistances: ["physical", "usually one physical type has lower or no resistances"]
    },
    undead: {
        trait: ["unholy", "mindless"],
        sense: "darkvision",
        immunities: ["death effects", "disease", "paralyze", "poison", "sleep", "unconscious"],
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
        weaknesses: ["fire", "slashing"]
    }
}

export var damageTypes = ["acid", "all", "area", "bleed", "bludgeoning", "cold", "cold iron", "electricity", "fire", "force", "holy", "mental", "physical", "piercing", "precision", "poison", "slashing", "silver", "sonic", "spirit", "splash", "unholy", "vitality", "void"];
export var generalDamageTypes = ["all", "physical"];

export var archetype = {
    brute: {
        perception: "low",
        attributes: {
            str: {scale: "high"},
            dex: {scale: "low"},
            con: {scale: "moderate"},
            int: {scale: "low"},
            wis: {scale: "low"},
            cha: {scale: "low"}
        },
        defenses: {
            ac: "moderate",
            fort: "high",
            reflex: "low",
            will: "low",
            hp: "high"
        },
        attack: {
            bonus: "high",
            damage: "high"
        }
    },
    magicalStriker: {
        attack: {
            bonus: "high",
            damage: "high"
        }
    },
    skillParagon: {
        skill: "extreme",
        defenses: {
            reflex: "high",
            will: "moderate",
            fort: "low"
        }
    },
    skirmisher: {
        attributes: {
            dex: {scale: "high"}
        },
        defenses: {
            fort: "low",
            reflex: "high",
            will: "moderate"
        },
        speed: "high"
    },
    sniper: {
        perception: "high",
        attributes: {
            dex: {scale: "high"}
        },
        defenses: {
            fort: "low",
            reflex: "high",
            hp: "moderate",
            will: "moderate"
        },
        attack: {
            bonus: "high",
            damage: "high"
        }
    },
    soldier: {
        attributes: {
            str: {scale: "high"}
        },
        defenses: {
            ac: "high",
            fort: "high",
        },
        attack: {
            bonus: "high",
            damage: "high"
        },
        ability: "reactive strike"
    },
    spellcaster: {
        defenses: {
            fort: "low",
            will: "high",
            hp: "low"
        },
        attack: {
            bonus: "low",
            damage: "moderate"
        }
    },
    "": {
        
    }
}

export var strikeDamage = {
    extreme: ["1d6+1", "1d6+3", "1d8+4", "1d12+4", "1d12+8", "2d10+7", "2d12+7", "2d12+10", "2d12+12", "2d12+15", "2d12+17", "2d12+20", "2d12+22", "3d12+19", "3d12+21", "3d12+24", "3d12+26", "3d12+29", "3d12+31", "3d12+34", "4d12+29", "4d12+32", "4d12+34", "4d12+37", "4d12+39", "4d12+42"],
    high: ["1d4+1", "1d6+2", "1d6+3", "1d10+4", "1d10+6", "2d8+5", "2d8+7", "2d8+9", "2d10+9", "2d10+11", "2d10+13", "2d12+13", "2d12+15", "3d10+14", "3d10+16", "3d10+18", "3d12+17", "3d12+18", "3d12+19", "3d12+20", "4d10+20", "4d10+22", "4d10+24", "4d10+26", "4d12+24", "4d12+26"],
    moderate: ["1d4", "1d4+2", "1d6+2", "1d8+4", "1d8+6", "2d6+5", "2d6+6", "2d6+8", "2d8+8", "2d8+9", "2d8+11", "2d10+11", "2d10+12", "3d8+12", "3d8+14", "3d8+15", "3d10+14", "3d10+15", "3d10+16", "3d10+17", "4d8+17", "4d8+19", "4d8+20", "4d8+22", "4d10+20", "4d10+22"],
    low: ["1d4", "1d4+1", "1d4+2", "1d6+3", "1d6+5", "2d4+4", "2d4+6", "2d4+7", "2d6+6", "2d6+8", "2d6+9", "2d6+10", "2d8+10", "3d6+10", "3d6+11", "3d6+13", "3d6+14", "3d6+15", "3d6+16", "3d6+17", "4d6+14", "4d6+15", "4d6+17", "4d6+18", "4d6+19", "4d6+21"]
}