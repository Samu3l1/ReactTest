import style from "./style.module.css"

const ReactInput = (props: any) => {
    return (
        <div className={style.wrapper}>
            <div className={style.name}>
                {`${props.name}:`}
            </div>
            <input {...props} {...props.register} className={style.form__field}/>
        </div>
    )
}

export default ReactInput;