import camelCase from "../util/camelCase"
import startCase from "../util/startCase"

export default function Select(props) {
    var options = props.options.map(e => <option key={e} value={camelCase(e)}>{startCase(e)}</option>);
    return (
        <select name={props.name}>
            {options}
        </select>
    )
    
}