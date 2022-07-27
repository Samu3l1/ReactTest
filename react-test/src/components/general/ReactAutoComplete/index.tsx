import React from "react";
import SelectMultiple from "react-select";
import {Controller} from "react-hook-form";
import style from "./style.module.css"

const Multiselect = ({label, name, values = [], control}: any) => {
    const options = values.map((value: any) => ({
        label: value,
        value: value
    }));

    return (
        <div className={style.wrapper}>
            <label className={style.name}>{label}</label>
            <div className={style.controller}>
                <Controller
                    name={name}
                    control={control}
                    render={({field: {value, onChange, onBlur}}) => {
                        return (
                            <SelectMultiple
                                options={options}
                                placeholder={"Choose..."}
                                isMulti={true}
                                onChange={(options) =>
                                    onChange(options?.map((option) => option.value))
                                }
                                onBlur={onBlur}
                                value={options.filter((option: { value: any; }) => value?.includes(option.value))}
                                defaultValue={options.filter((option: { value: any; }) =>
                                    value?.includes(option.value)
                                )}
                            />
                        );
                    }}
                />
            </div>
        </div>
    );
};

export default Multiselect;
