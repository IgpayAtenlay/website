import { useContext } from 'react';
import { CreatureContext } from "../index";
import Name from "../autoForm/skills/name";
import SortButton from '../autoForm/skills/sortButton';
import AddButton from '../autoForm/skills/addButton';
import DeleteButton from '../autoForm/skills/deleteButton';
import NumberInput from './numberInput';

export default function Skills() {
    var {creature} = useContext(CreatureContext);

    var skills = []
    creature.skills.forEach(e => {
        skills = skills.concat(<Name key={e.id + "name"} id={e.id} name={e.name} />);
        skills = skills.concat(<NumberInput key={e.id + "scale"} location={e} />);
        skills = skills.concat(<DeleteButton key={e.id + "delete"} id={e.id} />);
    }
        
    );

    return (
        <div>
            <p><b>Skills</b></p>
            <div class="skillWrapper">
                {skills}
            </div>
            <AddButton />
            <SortButton />
        </div>
    );
}