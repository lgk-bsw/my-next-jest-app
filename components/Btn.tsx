import styles from "./Btn.module.scss";

export const Btn = ({ label, type }: { label: string; type: "button" | "submit" }) => (
    <button className={styles.btn} type={type}>
        {label}
    </button>
);