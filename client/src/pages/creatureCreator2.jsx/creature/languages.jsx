import startCase from "../../../util/startCase";

export default function Languages(props) {
    console.log("languages");
    
    if (!props.languages || props.languages.length === 0) {
        return;
    }

    var languages = props.languages.slice(0,-1).map(e => 
        <span key={e.id}>{startCase(e.language)}, </span>
    );
    var lastLanguage = props.languages.slice(-1).map(e => 
        <span key={e.id}>{startCase(e.language)}</span>
    );

    return (<p><b>Languages</b> {languages}{lastLanguage}</p>);
}