import styles from './Round.module.css'
import PropTypes from 'prop-types'

export function Round(props) {

    return(
        <div>
            <h1>Forma geométrica: {props.nome}</h1>
            <h2>Quantidade de lados: {props.lado}</h2>
            
            <div className={styles.round}></div>
            
        </div>
    );
};
Round.propTypes = {
    nome: PropTypes.string.isRequired,
    lado: PropTypes.string.isRequired
}