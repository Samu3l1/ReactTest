import {Autocomplete, Chip, TextField} from "@mui/material";

const ReactAutoComplete = ({state, setState, readOnly}: any) => {

    return (
        <Autocomplete
            size="small"
            multiple
            id="tags-filled"
            options={[]}
            readOnly={readOnly}
            value={state}
            // defaultValue={input?.value}
            freeSolo
            onChange={(e, value) => {
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
    );
};

export default ReactAutoComplete;
