export default function Result(props) {
    var result = props.result;

    if (Object.keys(result).length === 0) {
        return
    } else {
        return (
            <div>
                <h2>Average</h2>
                <p>{round(result.averageDamage)}</p>
                <h2>Max</h2>
                <p>{round(result.maxDamage)}</p>
                <h2>Min</h2>
                <p>{round(result.minDamage)}</p>
                <h2>Percent of Critical Successes</h2>
                <p>{percent(result.accuracy.critSuccess)}</p>
                <h2>Percent of Successes</h2>
                <p>{percent(result.accuracy.success)}</p>
                <h2>Percent of Failures</h2>
                <p>{percent(result.accuracy.fail)}</p>
                <h2>Percent of Critical Failures</h2>
                <p>{percent(result.accuracy.critFail)}</p>
            </div>
        )
    }
}

function round(num) {
    return Math.floor(num * 100) / 100;
}

function percent(num) {
    num = num * 100;

    var numString = Math.floor(num)
    
    if (num !== Math.floor(num)) {
        if (Math.floor(num) === 0) {
            numString = ""
        }
        var quarters = (num - Math.floor(num)) * 4;
        if (quarters === 1) {
            numString = numString + "¼"
        } else if (quarters === 2) {
            numString = numString + "½"
        } else if (quarters === 3) {
            numString = numString + "¾"
        }
    }

    return numString + " %";
}