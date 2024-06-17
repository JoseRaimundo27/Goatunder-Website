import Button from '../Button'
import style from './LoginForm.module.scss'

const LoginForm = () => {
    return (
        <form className={style.loginForm}>
            <h2>Fazer Login</h2>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nome do usuário:</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="usernameHelp" placeholder="Insira seu usuário" maxLength={12} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password:</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Insira sua senha" />
                <a href="#">Esqueceu sua senha?</a>
            </div>
            <div className={style.loginForm__botoes}>
                <Button>Login</Button>
                <Button>Registrar</Button>
            </div>
        </form>
    )
}

export default LoginForm


