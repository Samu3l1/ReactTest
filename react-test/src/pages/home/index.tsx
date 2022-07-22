import style from "./style.module.css"
import UserInputForm from "../../components/forms/UserInputForm";
import {useState} from "react";

const Home = () => {

    const [defaultValues, setDefaultValues] = useState<any>()

    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.form} style={{borderRight:"1px solid black"}}>
                    <UserInputForm defaultValues={defaultValues} setDefaultValues={setDefaultValues}/>
                </div>
                <div className={style.form}>
                    <UserInputForm staticForm={true} defaultValues={defaultValues}/>
                </div>
            </div>
        </div>
    )
}

export default Home;