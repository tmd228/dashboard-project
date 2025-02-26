import styles from './Card.module.css'

export default function Card({ title, value }) {
    return (<div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.value}>{value}</p>
      </div>)
}