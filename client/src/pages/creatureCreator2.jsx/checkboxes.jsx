import startCase from "../../util/startCase";

export default function Checkboxes(props) {
    var list = props.list.map(e => {
        return <span key={e}>
            <input type="checkbox" id={e} name={props.name} value={e} />
            <label htmlFor={e}>{startCase(e)}</label>
        </span>
        
    })
    return (<fieldset>
        <legend>{startCase(props.name)}</legend>
        {list}
    </fieldset>);
}