import PropTypes from 'prop-types';

export function Botao({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
  };
  Botao.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }
