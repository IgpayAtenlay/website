import { useContext } from 'react';
import { CreatureContext } from "../../index";
import Name from "./name";
import Scale from "./scale";
import SortButton from './sortButton';
import AddButton from './addButton';
import DeleteButton from './deleteButton';

export default function Skills() {
    var {creature} = useContext(CreatureContext);

    var skills = []
    creature.skills.forEach(e => {
        skills = skills.concat(<Name key={e.id + "name"} id={e.id} name={e.name} />);
        skills = skills.concat(<Scale key={e.id + "scale"} id={e.id} scale={e.scale} />);
        skills = skills.concat(<DeleteButton key={e.id + "delete"} id={e.id} />);
    }
        
    );

    return (
        <div>
            <p><b>Skills</b></p>
            <div className="skillWrapper">
                {skills}
            </div>
            <AddButton />
            <SortButton />
        </div>
    );
}