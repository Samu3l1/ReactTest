import style from "./style.module.css"
import {ErrorMessage} from "@hookform/error-message";

/**
 * props are given a type of any because whatever is passed as a prop is spread to the input component
 * @param {any} props
 * @constructor
 */
const ReactInput = (props: any) => {

    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.name}>
                    {`${props.name}:`}
                </div>
                <input {...props} {...props.register} className={style.form__field}/>
            </div>
            <ErrorMessage
                errors={props.errors}
                name={props.name.toLowerCase()}
                render={({message}) => {
                    return (
                        <p className={style.errorMessage}>{message}</p>
                    )
                }}
            />
        </div>

    )
}

export default ReactInput;
