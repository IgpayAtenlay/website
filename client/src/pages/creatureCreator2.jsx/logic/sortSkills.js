export default function sortSkills(skills) {
    return skills.toSorted(compareFn);
}

function compareFn(a, b) {
    if (a.name.includes("lore")) {
        // a is lore
        if (b.name.includes("lore")) {
            // b is lore
            // compare a and b alphabetically
            return a.name.localeCompare(b.name);
        } else {
            // b is not lore
            // compare lore and b alphabetically
            return "lore".localeCompare(b.name);
        }
    } else {
        // a is not lore
        if (b.name.includes("lore")) {
            // b is lore
            // compare a and lore alphabetically
            return a.name.localeCompare("lore");
        } else {
            // b is not lore
            // compare a and b alphabetically
            return a.name.localeCompare(b.name);
        }
    }
}