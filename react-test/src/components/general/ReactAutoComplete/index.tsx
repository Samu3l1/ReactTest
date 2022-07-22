import {Autocomplete, Chip, TextField} from "@mui/material";
import {Dispatch, SetStateAction} from "react";
import style from "./style.module.css"

const ReactAutoComplete = ({state, setState, readOnly}: {state: string[], setState: Dispatch<SetStateAction<string[]>>, readOnly: boolean}) => {

    return (
        <div className={style.wrapper}>
            <div className={style.name}>
                {`Hobbies: `}
            </div>
            <Autocomplete
                size="small"
                fullWidth
                multiple
                id="tags-filled"
                options={[]}
                readOnly={readOnly}
                value={state}
                freeSolo
                onChange={(e, value: any) => {
                    setState(value)
                }}
                renderTags={(value: any[], getTagProps: (arg0: { index: any }) => JSX.IntrinsicAttributes) =>
                    value.map((option: any, index: any) => {
                        return (
                            <Chip size={"small"} key={index} variant="outlined" label={option} {...getTagProps({ index })} />
                        );
                    })
                }
                renderInput={(params: any) => (
                    <>
                        <TextField {...params} label={"Hobbies"} placeholder={"Hobbies"} />
                    </>
                )}
            />
        </div>
    );
};

export default ReactAutoComplete;
