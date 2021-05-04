import React from "react";
import Head from "next/head";
import Layout from "../components/layout/layout";
import Popular from "../components/module/Popular";
import FeaturedPost from "../components/module/categories/FeaturedPost";
import ItemPost03 from "../components/base/ItemPost03";
import ItemPost from "../components/module/categories/ItemPost";
const Categories = () => (
  <>
   <Head>
      <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Categories</title>
        <meta name="description" content='{meta.description}'/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content='{meta.image}' />
        <meta name="keywords" content='{meta.keywords}'></meta>
        <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css?family=B612+Mono&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap" rel="stylesheet" />
  </Head>
  <Layout>
  <div className="content-widget">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <h4 className="spanborder">
          <span>Culture</span>
        </h4>
        <FeaturedPost/>
        <ItemPost03/>
        <ItemPost03/>
        <ItemPost03/>
        <div className="row justify-content-between">
          <div className="divider-2" />
            <ItemPost/>
            <ItemPost/>
            <ItemPost/>
            <ItemPost/>
        </div>
        <ItemPost03/>
        <ItemPost03/>
        <ItemPost03/>
       <ul className="page-numbers heading">
          <li><span aria-current="page" className="page-numbers current">1</span></li>
          <li><a className="page-numbers" href="#">2</a></li>
          <li><a className="page-numbers" href="#">3</a></li>
          <li><a className="page-numbers" href="#">4</a></li>
          <li><a className="page-numbers" href="#">5</a></li>
          <li><a className="page-numbers" href="#">...</a></li>
          <li><a className="page-numbers" href="#">98</a></li>
          <li><a className="next page-numbers" href="#"><i className="icon-right-open-big" /></a></li>
        </ul>
      </div> {/*col-md-8*/}
      <Popular/>
    </div>
  </div> {/*content-widget*/}
</div>

  </Layout>
 
</>
);
export default Categories;