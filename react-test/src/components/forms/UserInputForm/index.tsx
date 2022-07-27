import {useForm} from "react-hook-form";
import ReactInput from "../../general/ReactInput";
import React from "react";
import ReactAutoComplete from "../../general/ReactAutoComplete";
import {FormDataType} from "../../../types";
import Select from "react-select";
import style from "./style.module.css"

/**
 * A list of options for the hobbies select
 */
const HOBBIES = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
]

/**
 * Renders a disabled Hobbies field
 * @constructor
 */
function DisabledSelect() {
    return (
        <div className={style.wrapper}>
            <div className={style.name}>
                Hobbies:
            </div>
            <div className={style.controller}>
                <Select
                    isMulti
                    isDisabled
                    placeholder="Hobbies"
                    name="colors"
                    options={HOBBIES}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
            </div>
        </div>
    );
}

const UserInputForm = () => {

    const {register, handleSubmit, control, watch, formState: {errors}} = useForm<FormDataType>({
        shouldUnregister: true,
    });

    const onSubmit = (data: FormDataType) => {
        console.log({...data})
    }

    return (
        <div>
            <form id="my-form" onSubmit={handleSubmit(onSubmit)} className={style.formWrapper}>
                {/* Right-side Form */}
                <div className={style.formComponent}>
                    <ReactInput name="Name" value={watch("name")}/>
                    <ReactInput name="Email" value={watch("email")}/>
                    <ReactInput name="Age" style={{width: "50px"}} value={watch("age")}/>
                    <ReactInput name="Website" value={watch("website")}/>
                    <DisabledSelect/>
                </div>
                {/* Left-Side Form */}
                <div className={style.formComponent}>
                    <ReactInput errors={errors} name="Name" register={register("name", {
                        required: "Name is required",
                        pattern: {value: /^[A-Za-z]+$/i, message: "Name can only contain letters"}
                    })}/>
                    <ReactInput errors={errors} name="Email" type="email"
                                register={register("email", {required: "Email is required"})}/>
                    <ReactInput errors={errors} min="0" max="120" name="Age"
                                style={{width: "50px"}}
                                type="number"
                                register={register("age", {min: {value: 18, message: "Minimum age is 18"}})}/>
                    <ReactInput errors={errors} name="Website" type="text"
                                register={register("website", {
                                    required: "Website is required",
                                    maxLength: {value: 500, message: "Character limit exceeded"}
                                })}/>
                    <ReactAutoComplete name={"hobbies"}
                                       label={"Hobbies"}
                                       control={control}
                                       values={["swimming", "jogging", "chess"]}/>
                </div>
            </form>
        </div>
    )
}

export default UserInputForm;