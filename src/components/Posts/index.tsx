import styles from "./styles.module.scss";
import Image from "next/image";

export type post = {
  id: number;
  color: string;
  name: string;
  pantone_value: 2000;
  year: 2000;
};

interface PostPropsType {
  posts: post[];
}

const Posts = ({ posts }: PostPropsType) => {
  return (
    <div className={styles.items}>
      {posts.map(item=>(
        <div key={item.id} className={styles.item}>
        <Image src="/post-image-fake.jpg" width={328} height={160} alt={item.name} className={styles.image}/>
        <div className={styles.body}>
          <p>"id":  {item.id}</p>
          <p>"name": "{item.name}"</p>
          <p>"year": {item.year}</p>
          <p>"color": "{item.color}"</p>
          <p>"pantone_value": "{item.pantone_value}"</p>
        </div>
      </div>
      ))}
      
    </div>
  );
};

export default Posts;
