export default function highestAbility(abilities) {
    var highestAbilities = [];
    Object.keys(abilities).forEach(key => {
        if (highestAbilities.length === 0) {
            highestAbilities = [key];
        } else if (abilities[highestAbilities[0]].modifier < abilities[key].modifier) {
            highestAbilities = [key];
        } else if (abilities[highestAbilities[0]].modifier === abilities[key].modifier) {
            highestAbilities = highestAbilities.concat(key);
        }
    })

    return highestAbilities;
}
