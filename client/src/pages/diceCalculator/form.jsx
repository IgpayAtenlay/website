import { useState } from 'react';

import Dice from './dice';
import Fortune from './fortune';
import SaveOrStrike from './saveOrStrike';
import Modifiers from "./modifiers";

export default function Form(props) {
    var[saveOrStrike, setSaveOrStrike] = useState("strike");

    return (<div className='activity'>
        <Modifiers />
        <Dice saveOrStrike={saveOrStrike} />
        <h2>Other</h2>
        <Fortune />
        <SaveOrStrike setSaveOrStrike={setSaveOrStrike} />
    </div>)
}