import { InferGetStaticPropsType } from "next";
import HeaderBlog from "@/components/HeaderBlog.tsx";
import Posts from "@/components/Posts";
import { post } from "@/components/Posts";

const blog = ({
  posts,
  err,
}: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return (
    <>
      <HeaderBlog />
      <main>
        <div className="container">
          {err && <h1>Ошибка загруки постов!</h1>}
          {posts && <Posts posts={posts} />}
        </div>
      </main>
    </>
  );
};

export default blog;

export async function getServerSideProps() {
  try {
    const posts: post[] = await (
      await fetch(
        "https://my-json-server.typicode.com/narspi/travel-testtask/posts"
      )
    )?.json();

    // обратите внимание на сигнатуру
    return {
      props: {
        posts,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        err: "unsuccess",
      },
    };
  }
}
