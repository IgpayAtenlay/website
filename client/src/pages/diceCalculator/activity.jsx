import { useState } from 'react';

import NumberInput from './numberInput';
import Dice from './dice';
import Fortune from './fortune';
import SaveOrStrike from './saveOrStrike';

export default function Activity(props) {
    var[saveOrStrike, setSaveOrStrike] = useState("customDamage");

    return (<div className='activity'>
        <NumberInput name="DC" />
        <NumberInput name="Modifier" />
        <Dice saveOrStrike={saveOrStrike} />
        <Fortune />
        <SaveOrStrike setSaveOrStrike={setSaveOrStrike} />
    </div>)
}