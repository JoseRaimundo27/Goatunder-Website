import React from 'react';
import { useRecoilValue } from 'recoil';
import Form from '../Form/index.tsx';
import { passwordLoginState, usernameLoginState } from '../../store/index.ts';
import { useNavigate } from 'react-router-dom';
import { api, criaUsuario } from '../../services/index.tsx';
import { useSaveToken } from '../../hooks/useSaveToken.tsx';
import { useLimpaInputs } from '../../hooks/useLimpaInputs.tsx';

const LoginForm: React.FC = () => {
    const username = useRecoilValue(usernameLoginState);
    const password = useRecoilValue(passwordLoginState);
    const navigate = useNavigate();
    const saveToken = useSaveToken();
    const limpaInputs = useLimpaInputs();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const usuario = criaUsuario(username, password);

        api.post('/login', usuario)
            .then((res) => {
                alert("Usuário Logado!");
                const token = res.data.token;
                saveToken(usuario, token);
                navigate('/admin');
            })
            .catch((error) => {
                alert("Erro");
                console.log(error.response.data)
            });

        limpaInputs();
    };

    return (
        <Form
            titulo='Login'
            label_user='Usuário'
            label_password_1='Senha'
            onSubmit={onSubmit}
        />
    );
};

export default LoginForm;
