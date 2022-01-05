import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/artWork'

export async function getStaticPaths() {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false
    }
}

interface IParams {
    params: { id: string }
}

interface IPostData {
    postData: IArt
}

interface IArt {
    title: string;
    price: number;
    img: string;
  }

export async function getStaticProps({ params }: IParams) {
    const postData = getPostData(params.id);

    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }: IPostData) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.price}
            <br />
            {postData.img}
        </Layout>
    )
}