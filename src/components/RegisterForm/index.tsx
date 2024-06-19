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
                label1='Registre Usuário'
                label2='Digite sua senha'
                label3='Digite novamente sua senha'
            />
        </div>

    )
}

export default RegisterForm