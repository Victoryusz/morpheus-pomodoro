import styles from './styles.module.css';

type MenuProps = {
  children: React.ReactNode;
};

export function Menu({ children }: MenuProps) {
  return <h1 className={styles.menu}>{children}</h1>;
}
