import styles from "./Btn.module.scss";

export const Btn = ({ label }: { label: string; }) => (
    <button className={styles.btn}>
        {label}
    </button>
);