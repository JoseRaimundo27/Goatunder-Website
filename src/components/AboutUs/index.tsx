import ImagemTexto from './ImagemTexto';
import TituloTexto from './TituloTexto';
import style from './AboutUs.module.scss'


const AboutUs = () => {
  return (
    <section className={style.aboutUs} id='aboutUs'>
      <TituloTexto />
      <ImagemTexto />
      
    </section>
  )
}

export default AboutUs;
