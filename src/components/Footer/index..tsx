import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda a tecnica pomodo</a>
      <a href=''>
        Morpheus Pomodo &copy;{new Date().getFullYear()} - Feito com
        {' REACT'}
      </a>
    </footer>
  );
}
