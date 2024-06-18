import Form from '../Form/index.tsx'
import style from './registerForm.module.scss'

const RegisterForm = () => {
    return (
        <div className={style.registerForm}>
            <Form
                titulo='Registrar'
                label1='Usuário'
                label2='Digite sua senha'
                label3='Digite novamente sua senha'
            />
        </div>

    )
}

export default RegisterForm