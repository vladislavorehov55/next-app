import styles from './InfoPanel.scss'
export default function InfoPanel({text}) {
  return (
    <div className={styles.container}>
      {text}
    </div>
  )
}