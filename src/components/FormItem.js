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
                    <option value="">{"Select"}</option>
                    {list && list.map((item, i) => {
                        return (
                            <option value={item} key={i}>
                                {item}
                            </option>
                        );
                    })}
                </FormControl>
            </div>
        );
};

export default FormItem;
