import {useForm} from "react-hook-form";
import ReactInput from "../../general/ReactInput";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import ReactAutoComplete from "../../general/ReactAutoComplete";
import {FormDataType} from "../../../types";

/**
 *
 * @param {FormDataType} formValues this is used to render the data on the form
 * @param {boolean} staticForm is used to determine if the user can change the form's fields
 * @param {Dispatch<SetStateAction<FormDataType | undefined>>} setFormValues setState function
 * @constructor
 */
const UserInputForm = ({
                           formValues,
                           staticForm = false,
                           setFormValues
                       }: { formValues?: FormDataType, staticForm?: boolean, setFormValues?: Dispatch<SetStateAction<FormDataType | undefined>> }) => {

    const {register, handleSubmit, getValues, reset, formState: {errors}} = useForm({
        shouldUnregister: true,
        defaultValues: formValues
    });

    /**
     * hobbies are stored in state rather then in the react-hook-form
     */
    const [hobbies, setHobbies] = useState<string[]>([])

    const onSubmit = (data: FormDataType) => {
        console.log({...data, hobbies: hobbies})
    }

    /**
     * When the user adds hobbies the useEffect gets triggered and updates the FormValues to include them
     */
    useEffect(() => {
        if (formValues && setFormValues) {
            setFormValues({...formValues, hobbies: hobbies})
        }
    }, [hobbies])

    /**
     *  whenever formValues changes it replaces the already existing data. this useEffect's main function is to update
     *  the readonly form
     */
    useEffect(() => {
        if (formValues) {
            reset(formValues)
        }
    }, [formValues])

    return (
        <div>
            <form id="my-form" onChange={() => {
                if (setFormValues) {
                    setFormValues({...getValues(), hobbies: hobbies})
                }
            }} onSubmit={handleSubmit(onSubmit)}>
                <ReactInput errors={errors} readOnly={staticForm} name="Name" register={register("name", {
                    required: "Name is required",
                    pattern: {value:/^[A-Za-z]+$/i, message:"Name can only contain letters"}
                })}/>
                <ReactInput errors={errors} readOnly={staticForm} name="Email" type="email"
                            register={register("email", {required: "Email is required"})}/>
                <ReactInput errors={errors} min="0" max="120" readOnly={staticForm} name="Age" style={{width: "50px"}} type="number"
                            register={register("age", {min: {value: 18, message: "Minimum age is 18"}})}/>
                <ReactInput errors={errors} readOnly={staticForm} name="Website" type="text"
                            register={register("website", {required: "Website is required", max: 500})}/>
                <ReactAutoComplete readOnly={staticForm} state={formValues?.hobbies ? formValues.hobbies : hobbies}
                                   setState={setHobbies}/>
            </form>
        </div>
    )
}

export default UserInputForm;