import style from './TituloTexto.module.scss';

const TituloTexto = () => {
    return (
        <div className={style.tituloTextoContainer}>
            <h2>A goatunder é feita para o underground</h2>
            <p>Somos a marca feita para o undregound: Cada peça de nossa coleção é uma declaração de identidade, criada para aqueles que vivem intensamente, que não têm medo de ser diferentes e que encontram beleza na escuridão e nas ruas da cidade. Nossa inspiração vem das subculturas urbanas, da música, da arte de rua e das noites que nunca terminam. </p>
        </div>
    )
}

export default TituloTexto;