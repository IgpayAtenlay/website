export default function startCase(string) {
    if (string.length === 0) {
        return string;
    }
    var array = string.split(" ");
    var casedArray = array.map(e => {
        if (e.length === 0) {
            return e;
        } else {
            return(
                e[0].toUpperCase() + e.slice(1).toLowerCase()
            );
        }
    });
    return casedArray.join(" ");
}