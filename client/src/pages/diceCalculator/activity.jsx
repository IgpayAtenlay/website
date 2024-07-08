import { useState } from 'react';

import Dice from './dice';
import Fortune from './fortune';
import SaveOrStrike from './saveOrStrike';
import Modifiers from "./modifiers";

export default function Activity(props) {
    var[saveOrStrike, setSaveOrStrike] = useState("customDamage");

    return (<div className='activity'>
        <Modifiers />
        <Dice saveOrStrike={saveOrStrike} />
        <h2>Other</h2>
        <Fortune />
        <SaveOrStrike setSaveOrStrike={setSaveOrStrike} />
    </div>)
}