import styles from "./Header.module.css";

interface HeaderProps {
  backButton: () => void;
}

const Header = ({ backButton }: HeaderProps) => {
  return <header className={styles.header}></header>;
};

export default Header;
