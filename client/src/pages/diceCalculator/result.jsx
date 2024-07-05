export default function Result(props) {
    var result = props.result;

    if (Object.keys(result).length === 0) {
        return
    } else {
        return (
            <div>
                <h2>Average</h2>
                <p>{result.averageDamage}</p>
                <h2>Max</h2>
                <p>{result.maxDamage}</p>
                <h2>Min</h2>
                <p>{result.minDamage}</p>
                <h2>Percent of Critical Successes</h2>
                <p>{result.accuracy.critSuccess}</p>
                <h2>Percent of Successes</h2>
                <p>{result.accuracy.success}</p>
                <h2>Percent of Failures</h2>
                <p>{result.accuracy.fail}</p>
                <h2>Percent of Critical Failures</h2>
                <p>{result.accuracy.critFail}</p>
            </div>
        )
    }
}