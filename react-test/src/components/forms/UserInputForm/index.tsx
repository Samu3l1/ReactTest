import {useForm} from "react-hook-form";
import ReactInput from "../../general/ReactInput";
import {useEffect, useState} from "react";
import ReactAutoComplete from "../../general/ReactAutoComplete";

const UserInputForm = ({
                           defaultValues,
                           staticForm = false,
                           setDefaultValues
                       }: { defaultValues?: any, staticForm?: boolean, setDefaultValues?: any }) => {

    const {register, handleSubmit, formState, watch, getValues, reset} = useForm({
        shouldUnregister: true,
        defaultValues: defaultValues
    });

    const [hobbies, setHobbies] = useState([])

    const onSubmit = (data: any) => {

    }

    useEffect(() => {
        if (defaultValues) {
            setDefaultValues({...defaultValues, hobbies: hobbies})
        } else{
            console.log("false", defaultValues)
        }
    }, [hobbies])

    useEffect(() => {
        if (defaultValues) {
            reset(defaultValues)
        }
    }, [defaultValues])

    return (
        <div>
            <form onChange={() => setDefaultValues({...getValues(), hobbies: hobbies})} onSubmit={handleSubmit(onSubmit)}>
                <ReactInput readOnly={staticForm} name="Name" register={register("name", { required: true })}/>
                <ReactInput readOnly={staticForm} name="Email" type="email" register={register("email", {required: true})}/>
                <ReactInput readOnly={staticForm} name="Age" style={{width: "50px"}} type="number"
                            register={register("age")}/>
                <ReactInput readOnly={staticForm} name="Website" type="text" register={register("website")}/>
                <ReactAutoComplete readOnly={staticForm} state={defaultValues?.hobbies ? defaultValues.hobbies : hobbies} setState={setHobbies}/>
            </form>
        </div>
    )
}

export default UserInputForm;