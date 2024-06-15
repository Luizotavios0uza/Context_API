import styles from './Triangle.module.css'

export function Triangle(props) {
    return(
    <div>

        <h1>{props.nome}</h1>
        <h2>Quantidade de lados: {props.lado}</h2>
        <div className={styles.round}></div>

  </div>
    
    )
}