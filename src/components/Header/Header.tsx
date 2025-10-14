import styles from "./Header.module.css";

interface HeaderProps {
  backButton: () => void;
}

const Header = ({ backButton }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <button onClick={backButton}>назад</button>
    </header>
  );
};

export default Header;
