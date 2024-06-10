import startCase from "../../../util/startCase";

export default function Languages(props) {
    var languages = props.languages.slice(0,-1).map(e => 
        <span key={e.id}>{startCase(e.language)}, </span>
    );
    var lastLanguage = props.languages.slice(-1).map(e => 
        <span key={e.id}>{startCase(e.language)}</span>
    );

    return (<span>{languages}{lastLanguage}</span>);
}