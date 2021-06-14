import Layout from '../../components/layout'
import Head from 'next/Head'
import { getAllPostIds, getPostData } from '../../lib/posts'

// need this method to determine what data should be rendered 
export default function Post({ postData }) {
    return (
      <Layout home>
        <Head>
            <title>{postData.title}</title>
        </Head>

        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Layout>
    )
  }


// returns a list of all te post ids that can be rendered
// browser uses this too determine which id was clicked 
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

// gets passed the object of the specific data we wanted from getStaticPaths, think the browser determines
// which one got clicked then it passes the id based off of the map you gave it from 
// getStaticPaths()
// these props get passed to the React Components props
export async function getStaticProps({ params }) {
    console.log(params); 
    const postData = await getPostData(params.id)
    return {
        props: {
        postData
        }
    }
}