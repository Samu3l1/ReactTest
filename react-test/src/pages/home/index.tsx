import style from "./style.module.css"
import UserInputForm from "../../components/forms/UserInputForm";
import {Button} from "@mui/material";

const Home = () => {

    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.form}>
                    <UserInputForm />
                </div>
            </div>
            <Button type="submit" form="my-form">Test the form validation</Button>
        </div>
    )
}

export default Home;