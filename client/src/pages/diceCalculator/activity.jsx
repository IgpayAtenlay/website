import { useState } from 'react';

import NumberInput from './numberInput';
import Dice from './dice';
import Fortune from './fortune';
import SaveOrStrike from './saveOrStrike';

export default function Activity(props) {
    var[saveOrStrike, setSaveOrStrike] = useState("customDamage");

    return (<div className='activity'>
        <h2>Hit Modifiers</h2>
        <NumberInput name="DC" />
        <NumberInput name="Modifier" />
        <Dice saveOrStrike={saveOrStrike} />
        <h2>Other</h2>
        <Fortune />
        <SaveOrStrike setSaveOrStrike={setSaveOrStrike} />
    </div>)
}