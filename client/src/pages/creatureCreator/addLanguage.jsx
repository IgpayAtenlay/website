import {useContext} from 'react';
import {CreatureContext} from "./index";

export default function AddLanguage() {
    var {creature, setCreature} = useContext(CreatureContext);
    
    return <button onClick={() => {
        creature.languages.push("common");
        setCreature(prevCreature => ({
            ...prevCreature,
            languages: prevCreature.languages
            }));
      }}>+</button>;
}



