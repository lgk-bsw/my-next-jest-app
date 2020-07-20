import Head from 'next/head';
import styles from './index.module.css';
import { List } from '../components/List';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <List />
    </main>
  </div>
)

export default Home;