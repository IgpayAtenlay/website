import startCase from "../../../util/startCase";
import {useContext} from 'react';
import {CreatureContext} from "../index";
import NumberInput from "./numberInput";

export default function Skills() {
    var {creature} = useContext(CreatureContext);

    var skills = creature.skills.slice(0,-1).map(e => 
        <span key={e.id}>
            <NumberInput label={startCase(e.name)} name={"value"} location={e}/>,&#8196;
        </span>
    );
    var lastSkill = creature.skills.slice(-1).map(e => 
        <NumberInput label={startCase(e.name)} name={"value"} location={e} key={e.id}/>
    );

    return (<span>{skills}{lastSkill}</span>);
}