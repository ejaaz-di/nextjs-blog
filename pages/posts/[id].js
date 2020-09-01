import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../../components/header'
import styles from '../../styles/Home.module.css'
import blogData from '../../components/blogData'
import BlogDetail from '../../components/blogDetail'


export default function BlogDetailPage() {
    const router = useRouter();
    const blogId = Number(router.query.id);
    const singleBlogDetail = blogData.find(blogDetails => blogDetails.id === blogId);
    const blogHtml = <BlogDetail blogVar={singleBlogDetail} />
  
    return (
      <div className={styles.container}>
        <Head>
          <title>{singleBlogDetail.title}</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
        </Head>
        <Header />
        <main className="max-w-screen-xl mx-auto mt-12">
          {blogHtml}
        </main>
      </div>
    )
  }