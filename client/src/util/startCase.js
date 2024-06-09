export default function startCase(string) {
    var array = string.split(" ");
    var casedArray = array.map(e => {
        return(
            e[0].toUpperCase() + e.slice(1).toLowerCase()
        )});
    return casedArray.join(" ");
}