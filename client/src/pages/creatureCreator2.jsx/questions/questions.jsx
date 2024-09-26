import { useState } from "react";

import Name from "./name";
import Level from "./level";
import Archetype from "./archetype";

export default function Questions(props) {
    var [page, setPage] = useState("name");

    function nextPage(currentPage) {
        switch(currentPage) {
            case "name":
                setPage("level");
                break;
            case "level":
                setPage("archetype");
                break;
            default:
                setPage("");
        }
    }

    return <div>
        {page==="name" && <Name parseData={props.parseData} nextPage={nextPage} />}
        {page==="level" && <Level parseData={props.parseData} nextPage={nextPage} />}
        {page==="archetype" && <Archetype parseData={props.parseData} nextPage={nextPage} />}
    </div>
}