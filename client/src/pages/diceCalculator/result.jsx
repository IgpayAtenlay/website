import { ActivityContext } from ".";
import { useContext } from "react";

export default function Result(props) {
    var activity = useContext(ActivityContext);

    if (activity.result) {
        var result = activity.result;
        return (
            <div>
                <h2>Results:</h2>
                <p>Average: {round(result.averageDamage)}</p>
                <p>Max: {round(result.maxDamage)}</p>
                <p>Min: {round(result.minDamage)}</p>
                <p>Percent of Critical Successes: {percent(result.accuracy.critSuccess)}</p>
                <p>Percent of Successes: {percent(result.accuracy.success)}</p>
                <p>Percent of Failures: {percent(result.accuracy.fail)}</p>
                <p>Percent of Critical Failures: {percent(result.accuracy.critFail)}</p>
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
        var quarters = Math.round((num - Math.floor(num)) * 4);
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