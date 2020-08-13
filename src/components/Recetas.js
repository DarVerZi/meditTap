import React from 'react';
import IconLabelButtons from './IconLabelButtons';
import CheckboxList from './CheckboxList';
import ComboBox from './ComboBox';

export default function Recetas(props) {
    const valor = props.pru;
    return (
    <div>
        {valor}
        <ComboBox/>
        <CheckboxList/> 
        <IconLabelButtons/>
    </div>
    );
}