import React, { Component } from "react";
import Head from "next/head";
import Image from "next/image";
import LazyLoad from "react-lazyload";
import Layout from "../../components/layout/layout";
import Share from "../../components/module/post/Share";
import Content from "../../components/module/post/Content";
export default class PostDetail extends Component {
  render() {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Detail post</title>
          <meta name="description" content="{meta.description}" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="{meta.image}" />
          <meta name="keywords" content="{meta.keywords}"></meta>
          <link
            href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=B612+Mono&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Layout>
          <div className="container">
            <div className="entry-header">
              <div className="mb-5">
                <h1 className="entry-title m_b_2rem">
                  In 21st-century Korea, shamanism is not only thriving — but
                  evolving
                </h1>
                <div className="entry-meta align-items-center">
                  <a className="author-avatar" href="#">
                    <img src="/static/images/author-avata-2.jpg" alt="true" />
                  </a>
                  <a href="author.html">Darcy Reeder</a> in{" "}
                  <a href="archive.html">OneZero</a>
                  <br />
                  <span>Jun 17</span>
                  <span className="middotDivider" />
                  <span className="readingTime" title="3 min read">
                    3 min read
                  </span>
                </div>
              </div>
            </div>
            <figure className="image zoom mb-5">
              <LazyLoad>
                <Image
                  src="/static/images/thumb/thumb-1240x700.jpg"
                  layout="responsive"
                  alt="true"
                  width={1111}
                  height={626}
                />
              </LazyLoad>
            </figure>
            <article className="entry-wraper mb-5">
              <Share></Share>
              <Content></Content>
              <div className="entry-bottom">
                <div className="tags-wrap heading">
                  <span className="tags">
                    <a href="#" rel="tag">
                      fashion
                    </a>
                    <a href="#" rel="tag">
                      lifestyle
                    </a>
                    <a href="#" rel="tag">
                      news
                    </a>
                    <a href="#" rel="tag">
                      style
                    </a>
                  </span>
                </div>
              </div>
              <div className="box box-author m_b_2rem">
                <div className="post-author row-flex">
                  <div className="author-img">
                    <img
                      alt="true"
                      src="/static/images/author-avata-1.jpg"
                      className="avatar"
                    />
                  </div>
                  <div className="author-content">
                    <div className="top-author">
                      <h5 className="heading-font">
                        <a href="author.html" title="Ryan" rel="author">
                          Ryan Mark
                        </a>
                      </h5>
                    </div>
                    <p className="d-none d-md-block">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse laoreet ut ligula et semper. Aenean
                      consectetur, est id gravida venenatis.
                    </p>
                    <div className="content-social-author">
                      <a target="_blank" className="author-social" href="#">
                        Facebook{" "}
                      </a>
                      <a target="_blank" className="author-social" href="#">
                        Twitter{" "}
                      </a>
                      <a target="_blank" className="author-social" href="#">
                        {" "}
                        Google +{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <div className="related-posts mb-5">
              <h4 className="spanborder text-center">
                <span>Related Posts</span>
              </h4>
              <div className="row justify-content-between">
                <div className="divider-2" />
                <article className="col-md-4">
                  <div className="mb-3 d-flex row">
                    <figure className="col-md-5">
                      <a href="single.html">
                        <img
                          src="/static/images/thumb/thumb-512x512-2.jpg"
                          alt="true"
                        />
                      </a>
                    </figure>
                    <div className="entry-content col-md-7 pl-md-0">
                      <h5 className="entry-title mb-3">
                        <a href="single.html">
                          Is ‘Interactive Storytelling’ the Future of Media?
                        </a>
                      </h5>
                      <div className="entry-meta align-items-center">
                        <a href="author.html">Furukawa</a> in{" "}
                        <a href="archive.html">Programing</a>
                        <br />
                        <span>March 14</span>
                        <span className="middotDivider" />
                        <span className="readingTime" title="3 min read">
                          6 min read
                        </span>
                        <span className="svgIcon svgIcon--star">
                          <svg className="svgIcon-use" width={15} height={15}>
                            <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="col-md-4">
                  <div className="mb-3 d-flex row">
                    <figure className="col-md-5">
                      <a href="single.html">
                        <img
                          src="/static/images/thumb/thumb-512x512-3.jpg"
                          alt="true"
                        />
                      </a>
                    </figure>
                    <div className="entry-content col-md-7 pl-md-0">
                      <h5 className="entry-title mb-3">
                        <a href="single.html">
                          How NOT to get a $30k bill from Firebase
                        </a>
                      </h5>
                      <div className="entry-meta align-items-center">
                        <a href="author.html">Glorida</a> in{" "}
                        <a href="archive.html">Living</a>
                        <br />
                        <span>April 14</span>
                        <span className="middotDivider" />
                        <span className="readingTime" title="3 min read">
                          7 min read
                        </span>
                        <span className="svgIcon svgIcon--star">
                          <svg className="svgIcon-use" width={15} height={15}>
                            <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="col-md-4">
                  <div className="mb-3 d-flex row">
                    <figure className="col-md-5">
                      <a href="single.html">
                        <img
                          src="/static/images/thumb/thumb-512x512-4.jpg"
                          alt="true"
                        />
                      </a>
                    </figure>
                    <div className="entry-content col-md-7 pl-md-0">
                      <h5 className="entry-title mb-3">
                        <a href="single.html">
                          Google Can’t Figure Out What YouTube Is
                        </a>
                      </h5>
                      <div className="entry-meta align-items-center">
                        <a href="author.html">Rayan Mark</a> in{" "}
                        <a href="archive.html">GEN</a>
                        <br />
                        <span>Jun 14</span>
                        <span className="middotDivider" />
                        <span className="readingTime" title="3 min read">
                          8 min read
                        </span>
                        <span className="svgIcon svgIcon--star">
                          <svg className="svgIcon-use" width={15} height={15}>
                            <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>{" "}
        </Layout>
      </>
    );
  }
}

