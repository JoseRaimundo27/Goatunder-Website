import { useRecoilState} from 'recoil';
import { passwordRegister1State, passwordRegister2State, usernameRegisterState } from '../../store/index.ts';
import Form from '../Form/index.tsx'
import style from './registerForm.module.scss'
import { api, criaUsuario, isEqualPasswords } from '../../services/index.tsx';



const RegisterForm: React.FC= () => {
    const [username, setUsername] = useRecoilState(usernameRegisterState)
    const [password_1,setPassword_1] = useRecoilState(passwordRegister1State)
    const [password_2, setPassword_2] = useRecoilState(passwordRegister2State)

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!isEqualPasswords(password_1, password_2)) {
            return alert("As senhas devem ser iguais")
        }

        const usuario: Iusuario = criaUsuario(username, password_1)
        
        api.post('/registrar', usuario)
            .then((e) => {
                alert("Usuario cadastrado com sucesso")
                console.log(e.data)
            })
            .catch((error) => {
                alert(error.response.data)
            })
            setUsername('');
            setPassword_1('');
            setPassword_2('');
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