import styles from "./Dashboard.module.css"
import ChartCard from "../../components/ChartCard/ChartCard"
import Card from "../../components/Card/Card"


export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Dashboard Overview</h1>

      <div className={styles.statsContainer}>
        <Card title="user" value="1,200" />
        <Card title="Revenue" value="$8,500" />
        <Card title="Orders" value="350" />
      </div>

      <div className={styles.chartsContainer}>
        <ChartCard title="Monthly Revenue" />
        <ChartCard title="User Growth" />
      </div>
    </div>
  )
}
