import { Round } from '../Round'
import { Triangle } from '../Triangle'
import { Square } from '../Square'
import styles from './Geometrics.module.css'

export function Geometris() {
   return(
   <div className={styles.geometrics}>
    <Round nome="Círculo" lado="0"></Round>
    <Triangle nome="Triangulo" lado="3"></Triangle>
    <Square nome="Quadrado" lado="4"></Square>
        </div>
   )
}