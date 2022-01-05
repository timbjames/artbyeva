import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/artWork'
import Link from 'next/link';

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
    contentHtml: string;
    isSold?: boolean;
}

export async function getStaticProps({ params }: IParams) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }: IPostData) {
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="back">
                            <Link href="/art-work">
                                <a>Back</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <section className="section details">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <header>
                                <h6>{postData.title}</h6>
                            </header>
                            Price: &pound;{postData.price}
                            <br />
                            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                        </div>
                        <div className="col-12 col-md-6">
                            {
                                postData.isSold && (
                                    <div className="sold">
                                        Sold
                                    </div>
                                )
                            }
                            <img alt={postData.title} src={postData.img} width="100%" />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}