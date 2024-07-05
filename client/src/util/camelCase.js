export default function camelCase(string) {
    if (string.length === 0) {
        return string;
    }
    var array = string.split(" ");
    var casedArray = array.map((e, index) => {
        if (e.length === 0) {
            return e;
        } else {
            if (index === 0) {
                return e.toLowerCase();
            } else {
                return(
                    e[0].toUpperCase() + e.slice(1).toLowerCase()
                );
            }
        }
    });
    var finalString = casedArray.join("");
    return finalString;
}