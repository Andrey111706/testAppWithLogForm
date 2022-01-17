import s from "./FormControls.module.css"

export const EmailArea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    const notHaveError = meta.touched && !meta.error
    return (
        <div className={s.formControl + ' ' + (meta.active? s.active: (hasError ? s.error : ' ') + ' ' +
            (notHaveError? s.success : ' ' ) )
        }>
                <input type={'email'}{...input} {...props}/>
        </div>
    )}
export const PasswordArea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    const notHaveError = meta.touched && !meta.error
    return (
        <div className={s.formControl + ' ' + (meta.active? s.active: (hasError ? s.error : ' ') + ' ' +
            (notHaveError? s.success : ' ' ) )
        }>
                <input type={'password'}  {...input} {...props}/>
        </div>
    )}