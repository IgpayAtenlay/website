import { useContext } from 'react';
import { CreatureContext } from "../../index";
import Name from "./name";
import Scale from "./scale";
import SortButton from './sortButton';
import AddButton from './addButton';
import DeleteButton from './deleteButton';

export default function Skills() {
    var {creature} = useContext(CreatureContext);

    var skills = creature.skills.map(e => {
        return (
            <tr key={e.id}>
                <th scope='row'><Name id={e.id} name={e.name} /></th>
                <td><Scale id={e.id} scale={e.scale} /></td>
                <td><DeleteButton id={e.id} /></td>
            </tr>
        );
    }
        
    );

    return (
        <div>
            <table>
                <caption>Skills</caption>
                <thead>
                    <tr>
                        <th scope='col'>Skill</th>
                        <th scope='col'>Scale</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {skills}
                </tbody>
            </table>
            <AddButton />
            <SortButton />
        </div>
    );
}