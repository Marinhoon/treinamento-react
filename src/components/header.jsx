import styles from './Header.module.css';

import logoProfessorBeta from "../assets/logoProfessorBeta.png"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoProfessorBeta} alt="logoTipo" />
      <strong></strong>
    </header>
  );
}
