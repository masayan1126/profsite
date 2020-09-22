import styles from './layout.module.css'
import imgstyle from './image.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container + " " + imgstyle.profimagesize}>{ children }</div>
  )
}
