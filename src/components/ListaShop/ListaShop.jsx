import PropTypes from 'prop-types'

export function Listas({items=[]}) {
 return (
    <>
      <h2>Lista de Compras</h2>
      <ul>
        {items.map((produto, indice) => (
          <li key={indice}>{produto}</li>
        ))}
      </ul>
    </>
  );
};
Listas.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string)
}