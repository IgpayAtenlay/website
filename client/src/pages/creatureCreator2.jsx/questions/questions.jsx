import { useState } from "react";

import Name from "./name";
import Level from "./level";

export default function Questions(props) {
    var [page, setPage] = useState("name");

    function nextPage(currentPage) {
        switch(currentPage) {
            case "name":
                setPage("level");
                break;
            default:
                setPage("");
        }
    }

    return <div>
        {page==="name" && <Name parseData={props.parseData} nextPage={nextPage} />}
        {page==="level" && <Level parseData={props.parseData} nextPage={nextPage} />}
    </div>
}