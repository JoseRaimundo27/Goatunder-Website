import Button from '../Button';
import style from './Form.module.scss';
import { FormProps } from '../../types';
import { useRecoilState } from 'recoil';
import { passwordLoginState, passwordRegister1State, passwordRegister2State, usernameLoginState, usernameRegisterState } from '../../store';


const Form: React.FC<FormProps> = ({ titulo, onSubmit, label_user, label_password_1, label_password_2 = "" }) => {

  const [usernameLogin, setUsernameLogin] = useRecoilState(usernameLoginState);
  const [usernameRegister, setUsernameRegister] = useRecoilState(usernameRegisterState);
  const [passwordLogin, setPasswordLogin] = useRecoilState(passwordLoginState)
  const [passwordRegister_1, setPasswordRegister_1] = useRecoilState(passwordRegister1State)
  const [passwordRegister_2, setPasswordRegister_2] = useRecoilState(passwordRegister2State)


  return (
    <form
      className={style.loginForm}
      onSubmit={event => onSubmit(event)}
    >
      <h2>{titulo}</h2>
      <div className="form-group">

        {label_user == "Usuário" ? (
          <>
            <label htmlFor="exampleInputEmail1">{label_user}</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="usernameHelp"
              placeholder="Insira seu usuário"
              maxLength={12}
              value={usernameLogin}
              onChange={(e) => setUsernameLogin(e.target.value)}
            />
          </>
        ) : null}

        {label_user == "Registre Usuário" ? (
          <>
            <label htmlFor="exampleInputEmail2">{label_user}</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="usernameHelp"
              placeholder="Insira seu usuário"
              maxLength={12}
              value={usernameRegister}
              onChange={(e) => setUsernameRegister(e.target.value)}
            />
          </>
        ) : null}

      </div>

      <div className="form-group">

        {label_password_1 == 'Senha' ? (
          <>
            <label
              htmlFor={label_password_1}>
              {label_password_1}:
            </label>
            <input
              type="password"
              className="form-control"
              id={label_password_1}
              placeholder="Insira sua senha"
              maxLength={12}
              value={passwordLogin}
              onChange={(e) => setPasswordLogin(e.target.value)}
            />
            <a href="#">Esqueceu sua senha?</a>
          </>
        ) : null}

        {label_password_1 == 'Digite sua senha de registro' ? (
          <>
            <label
              htmlFor={label_password_1}>
              {label_password_1}:
            </label>
            <input
              type="password"
              className="form-control"
              id={label_password_1}
              placeholder="Insira sua senha"
              maxLength={12}
              value={passwordRegister_1}
              onChange={(e) => setPasswordRegister_1(e.target.value)}
            />
          </>
        ) : null}

      </div>

      {label_password_2 == "Digite novamente sua senha" ? (
        <div className="form-group">
          <label htmlFor={label_password_2}>
            {label_password_2}:
          </label>
          <input
            type="password"
            className="form-control"
            id={label_password_2}
            placeholder="Insira novamente sua senha"
            maxLength={12}
            value={passwordRegister_2}
            onChange={(e) => {setPasswordRegister_2(e.target.value)}}
          />
        </div>
      ) : null}

      <div className={style.loginForm__botoes}>
        <Button>{titulo}</Button>
      </div>

    </form>
  );
};

export default Form;
