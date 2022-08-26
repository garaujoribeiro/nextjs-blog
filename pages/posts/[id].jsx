import React from "react";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
const Posts = ({ pageProps }) => {
  const { id, title, data } = pageProps.postData;
  return (
    <Layout>
      {id}
      <br />
      {title}
      <br />
      {data}
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};

export default Posts;
