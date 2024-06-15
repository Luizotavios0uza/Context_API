import PropTypes from 'prop-types'

export function Tela({nome, valor="Nenhum"}) {
       return(
        <>
        <h1>{nome}</h1>
        <h2>{valor}</h2>
        </>
       )
}
Tela.propTypes = {
       valor: PropTypes.number.isRequired
}