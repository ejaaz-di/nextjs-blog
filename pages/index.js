import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import blogData from '../components/blogData'

export default function Home() {

  const blogComponent = blogData.map(blog => {
    return (
      console.log(blog.id,blog.title,blog.image,blog.author,blog.publishDate),
      <h1>{blog.title}</h1>
    )
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        {blogComponent}

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
