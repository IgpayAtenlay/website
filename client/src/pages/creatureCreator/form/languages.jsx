import startCase from "../../../util/startCase";
import {useContext} from 'react';
import {CreatureContext} from "../index";

export default function Languages(props) {
    var languages = props.languages.slice(0,-1).map(e => 
        <span key={e.id}><Language language={e.language} id={e.id} key={e.id}/>, </span>
    );
    var lastLanguage = props.languages.slice(-1).map(e => 
        <Language language={e.language} id={e.id} key={e.id}/>
    );

    return (<span>{languages}{lastLanguage}</span>);
}

function Language(props) {
    var languages = ["common", "aquan"]

    var {creature, setCreature} = useContext(CreatureContext);
    
    function handleChange(e) {
        var value = e.target.value.toLowerCase();
        var language = creature.languages.find(a => a.id === e.target.id);
        
        if (value === "delete") {
            var index = creature.languages.indexOf(language);
            creature.languages.splice(index,1);
        } else {
            language.language = value;
        }
        setCreature(prevCreature => ({
            ...prevCreature,
            languages: prevCreature.languages
            }));
    }

    var languageOptions = languages.map(e => 
        <option value={e} key={e}>{startCase(e)}</option>
    );

    if (languages.includes(props.language)) {
        return (
            <select id={props.id} value={props.language} onChange={handleChange}>
                {languageOptions}
                <option value="other">Other</option>
                <option value="delete">Delete</option>
            </select>);
    } else {
        return (<input id={props.id} type="text" value={props.language} onChange={handleChange}></input>);
    }
}

