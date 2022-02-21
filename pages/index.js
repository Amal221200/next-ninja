import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, maxime minima nisi, voluptates dignissimos eaque cum iusto rem perspiciatis numquam iste, non neque laboriosam nemo animi mollitia atque eos libero.</p>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, maxime minima nisi, voluptates dignissimos eaque cum iusto rem perspiciatis numquam iste, non neque laboriosam nemo animi mollitia atque eos libero.</p>
      <Link href='/ninjas'><a className={styles.btn}>See Ninjas</a></Link>
    </div>
  )
}
