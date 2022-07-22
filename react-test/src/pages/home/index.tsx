import style from "./style.module.css"
import UserInputForm from "../../components/forms/UserInputForm";
import {useState} from "react";
import {FormDataType} from "../../types";
import {Button} from "@mui/material";

const Home = () => {

    /**
     * formValues stores the form values for both forms
     */
    const [formValues, setFormValues] = useState<FormDataType | undefined>()

    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.form} style={{borderRight:"1px solid black"}}>
                    <UserInputForm formValues={formValues} setFormValues={setFormValues}/>
                </div>
                <div className={style.form}>
                    <UserInputForm staticForm={true} formValues={formValues}/>
                </div>
            </div>
            <Button type="submit" form="my-form">Test the form validation</Button>
        </div>
    )
}

export default Home;