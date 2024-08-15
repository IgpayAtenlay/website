import startCase from "../../util/startCase";
import { traits } from "./variables";

export default function Traits() {
    var traitList = Object.keys(traits).map(e => {
        return <span key={e}>
            <input type="checkbox" id={e} name="traits" value={e} />
            <label htmlFor={e}>{startCase(e)}</label>
        </span>
        
    })
    return (<fieldset>
        <legend>Traits</legend>
        {traitList}
    </fieldset>);
}