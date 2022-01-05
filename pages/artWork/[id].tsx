import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/artWork'
import Link from 'next/link';
import React, { useState } from 'react';

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

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ messageSending, setMessageSending ] = useState(false);
    const [ messageSent, setMessageSent ] = useState(false);

    const sendEnquiry = async (event: React.FormEvent) => {
        event.preventDefault();

        setMessageSending(true);

        const res = await fetch(`https://us-central1-art-by-eva.cloudfunctions.net/addMessage?text=${message}&name=${name}&email=${email}`);

        if (res.ok) {
            setMessageSent(true);
        }

        //const result = await res.json();

        setMessageSending(false);
    };

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

                            <header>
                                <h6>Enquire</h6>
                            </header>
                            {
                                !messageSent
                                ? (
                                    <>
                                        <p>Please complete the following fields to send an enquiry.</p>
                                        <form onSubmit={sendEnquiry}>
                                            <div className="mb-3">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control" value={name} onChange={(e) => {setName(e.currentTarget.value)}} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input type="text" className="form-control" value={email} onChange={(e) => {setEmail(e.currentTarget.value)}} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Message</label>
                                                <textarea className="form-control" value={message} onChange={(e) => {setMessage(e.currentTarget.value)}}>
                                                </textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary" disabled={messageSending}>
                                                {
                                                    messageSending ? 'Processing' : 'Enquire Now'
                                                }
                                            </button>
                                        </form>
                                    </>
                                )
                                : (
                                    <p>Your Enquiry has been submitted.</p>
                                )
                            }
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