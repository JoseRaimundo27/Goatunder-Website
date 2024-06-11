import Camisas from '../../../assets/images/camisas.png'
import style from './ImagemTexto.module.scss'

const ImagemTexto = () => {
    return (
      <div className={style.imagemTextoContainer}>
        <img src={Camisas} alt="Foto das camisas" />
        <p>Acreditamos que a moda é uma forma de expressão poderosa e que sua roupa deve contar a sua história. Venha fazer parte do nosso movimento. Vista o underground. Seja você.</p>
      </div>
    )
  }
  
  export default ImagemTexto;