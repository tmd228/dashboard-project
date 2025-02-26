import styles from "./Dashboard.module.css"
import ChartCard from "../../components/ChartCard/ChartCard"


export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard Overview</h1>

      <div className={styles.statsContainer}>
        <div className={styles.statCard}>Total Users: 1,200</div>
        <div className={styles.statCard}>Revenue: $45,000</div>
        <div className={styles.statCard}>Active Sessions: 320</div>
      </div>

      <div className={styles.chartsContainer}>
        <ChartCard title="Monthly Revenue" />
        <ChartCard title="User Growth" />
      </div>
    </div>
  )
}
