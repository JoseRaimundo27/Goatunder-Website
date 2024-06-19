import Form from '../Form/index.tsx'

const LoginForm = () => {

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    return (
        <Form
            titulo='Login'
            label1='Usuário'
            label2='Senha'
            onSubmit={onSubmit}
        />
    )
}

export default LoginForm


