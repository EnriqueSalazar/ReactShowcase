/**
 * Created by enriq on 17/11/16.
 */
import React from "react";

import {ControlLabel, FormControl} from "react-bootstrap";

const FormItem = props => {
        const { callback, label, list, value, } = props;
        return (
            <div>
                <ControlLabel>{label}</ControlLabel>
                <FormControl
                    componentClass="select"
                    onChange={callback}
                    value={value}
                >
                    <option value="select">{""}</option>
                    {list.map(item => {
                        return (
                            <option value={item.value} key={item.value}>
                                {item.option}
                            </option>
                        );
                    })}
                </FormControl>
            </div>
        );
};

export default FormItem;
