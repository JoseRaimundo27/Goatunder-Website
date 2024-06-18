import Button from '../Button'
import style from './Form.module.scss'

interface FormProps {
    titulo: string,
    label1: string,
    label2: string,
    label3?: string

}

const Form: React.FC<FormProps> = ({ titulo, label1, label2, label3 = "" }) => {
    return (
        <form className={style.loginForm}>
            <h2>{titulo}</h2>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{label1}:</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="usernameHelp" placeholder="Insira seu usuário" maxLength={12} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">{label2}:</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Insira sua senha" />
                {label3 == "" ?
                    <a href="#">Esqueceu sua senha?</a>
                    : null}
            </div>
            {label3 != "" ?
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">{label3}:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Insira sua senha" />
                </div> 
                : null}
            <div className={style.loginForm__botoes}>
                <Button>{titulo}</Button>
            </div>
        </form>
    )
}

export default Form


