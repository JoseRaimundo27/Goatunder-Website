import Button from '../Button';
import style from './Form.module.scss';
import { FormProps } from '../../types';
import { useRecoilState } from 'recoil';
import { usernameLoginState, usernameRegisterState } from '../../store';
import { useEffect } from 'react';

const Form: React.FC<FormProps> = ({ titulo, onSubmit, label1, label2, label3 = "" }) => {
  const [usernameLogin, setUsernameLogin] = useRecoilState(usernameLoginState);
  const [usernameRegister, setUsernameRegister] = useRecoilState(usernameRegisterState);

  useEffect(() => {
    console.log(usernameLogin);
    console.log(usernameRegister)
  }, [usernameLogin]);

  return (
    <form
      className={style.loginForm}
      onSubmit={event => onSubmit(event)}
    >
      <h2>{titulo}</h2>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">



          {label1 == "Usuário" ? (
            <>
              <label htmlFor="exampleInputEmail1">{label1}</label>
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

          {label1 == "Registre Usuário" ? (
            <>
              <label htmlFor="exampleInputEmail2">{label1}</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="usernameHelp"
                placeholder="Insira seu usuário"
                maxLength={12}
                value={usernameLogin}
                onChange={(e) => setUsernameRegister(e.target.value)}
              />
            </>
          ) : null}
        </label>

      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">
          {label2}:
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Insira sua senha"
          maxLength={12}
        />
        {label3 === "" ? (
          <a href="#">Esqueceu sua senha?</a>
        ) : null}
      </div>
      {label3 !== "" ? (
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">
            {label3}:
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Insira novamente sua senha"
            maxLength={12}
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
