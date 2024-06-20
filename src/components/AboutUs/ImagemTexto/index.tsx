import GrafitePNG from '/grafiti.png'
import CamisasTiaguinho from '../../../../public/roupa.png'
import style from './ImagemTexto.module.scss'

const ImagemTexto = () => {
  return (
    <div className={style.imagemTextoContainer}>
      <img src={CamisasTiaguinho} alt="Foto das camisas" />
      
      <div>
        <p>Somos a marca feita para o undregound: Cada peça de nossa coleção é uma declaração de identidade, criada para aqueles que vivem intensamente, que não têm medo de ser diferentes e que encontram beleza na escuridão e nas ruas da cidade. Nossa inspiração vem das subculturas urbanas, da música, da arte de rua e das noites que nunca terminam. </p>
        <p>Acreditamos que a moda é uma forma de expressão poderosa e que sua roupa deve contar a sua história. Venha fazer parte do nosso movimento. Vista o underground. Seja você.</p>
        <img src={GrafitePNG} alt="Foto de um homem grafitando"  />
      </div>
    </div>
  )
}

export default ImagemTexto;