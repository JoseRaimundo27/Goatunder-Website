import style from './Contact.module.scss'
import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";

const Contact = () => {
  const [emailEnviado, setEmailEnviado] = useState<boolean>(false)

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailEnviado(true)
    //Codigo de post para o backend
  }
  return (
    <section id="contato" className={style.contatoContainer}>

      <form onSubmit={(e) => {handleSubmit(e)}} className={style.contatoBox}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Deixe seu email e fique por dentro de novidades, promoções e dicas*</label>
          <input style={{display: emailEnviado ? 'none' : 'block' }}type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
        </div>
        <button style={{display: emailEnviado ? 'none' : 'block' }} type="submit" className="btn btn-primary">Enviar</button>
        <p style={{display: emailEnviado ? 'block' : 'none', marginTop: '1rem'}}>Email cadastrado com sucesso! <FaCheck fontSize={15} /></p>
      </form>


    </section >
  )
}

export default Contact;