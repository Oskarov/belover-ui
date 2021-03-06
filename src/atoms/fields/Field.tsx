import React from 'react';
import {FieldContext} from "./FieldContext";
import {Label} from "./Label";
import {Input} from "./Input";
import {Textarea} from "./Textarea";
import {useUniqueID} from "../../utils/useUniqueID";
import PropTypes from "prop-types";

interface IFieldComposition {
    Label: typeof Label
    Input: typeof Input,
    TextArea: typeof Textarea
}

export const Field: React.FC & IFieldComposition = ({children}) => {
    const id = useUniqueID();
    return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>
}

Field.propTypes = {
    children: PropTypes.any,
}

Field.Label = Label;
Field.Input = Input;
Field.TextArea = Textarea;