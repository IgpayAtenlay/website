import { useContext } from 'react';
import { CreatureContext } from "../../index";
import Name from "./name";
import Scale from "./scale";
import SortButton from './sortButton';
import AddButton from './addButton';
import DeleteButton from './deleteButton';

export default function Skills() {
    var {creature} = useContext(CreatureContext);

    var skills = [];
    creature.skills.forEach(e => {
        skills = skills.concat(<Name id={e.id} name={e.name} key={e.id + "name"}/>);
        skills = skills.concat(<Scale id={e.id} scale={e.scale} key={e.id + "scale"} />);
        skills = skills.concat(<DeleteButton id={e.id} key={e.id + "delete"} />);
    }
        
    );

    return (
        <div>
            <b>Skills</b>
            <div className='skillWrapper'>
                {skills}
            </div>
            
            <AddButton />
            <SortButton />
        </div>
    );
}