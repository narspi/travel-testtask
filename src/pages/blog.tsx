import HeaderBlog from "@/components/HeaderBlog.tsx";

const blog = (props) => {
  console.log(props)
  return (
    <>
      <HeaderBlog />
    </>
  )
}

export default blog;

export async function getStaticProps() {
  try {
    const posts = await (await fetch('https://my-json-server.typicode.com/narspi/travel-testtask/posts'))?.json()

    // обратите внимание на сигнатуру
    return {
      props: {
        posts
      }
    }
  } catch (err) {
    console.log(err.message);
    return {
      props: {
        err: 'unsuccess'
      }
    }
  }
 
}



