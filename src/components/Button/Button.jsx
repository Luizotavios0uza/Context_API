import PropTypes from 'prop-types';
import styles from './Button.Module.css';
export function Botao({ onClick }) {
  return (
    <>
      <button id='Botao' onClick={onClick}>Clique aqui</button>
    </>
  );
};