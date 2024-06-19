import Form from '../Form/index.tsx'
import style from './registerForm.module.scss'

const RegisterForm = () => {
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        

    }
    return (
        <div className={style.registerForm}>
            <Form
                titulo='Registrar'
                onSubmit={onSubmit}
                label_user='Registre Usuário'
                label_password_1='Digite sua senha de registro'
                label_password_2='Digite novamente sua senha'
            />
        </div>

    )
}

export default RegisterForm