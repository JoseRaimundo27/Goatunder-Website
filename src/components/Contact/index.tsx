import style from './Contact.module.scss'
import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";

const Contact = () => {
  const [email, setEmail] = useState<string>('');
  const [isEmailSend, setIsEmailSend] = useState<boolean>(false);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email)
    setIsEmailSend(true)
    //Codigo de post para o backend
  }
  return (
    <section id="contato" className={style.contatoContainer}>
      <form onSubmit={(e) => {handleSubmit(e)}} className={style.contatoBox}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Deixe seu email e fique por dentro de novidades, promoções e dicas*</label>
          <input value={email} onChange={(e) => {setEmail(e.target.value)}} style={{display: isEmailSend ? 'none' : 'block' }}type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
        </div>
        <button style={{display: isEmailSend ? 'none' : 'block' }} type="submit" className="btn btn-primary">Enviar</button>
        <p style={{display: isEmailSend ? 'block' : 'none', marginTop: '1rem'}}>Email cadastrado com sucesso! <FaCheck fontSize={15} /></p>
      </form>

    </section >
  )
}

export default Contact;