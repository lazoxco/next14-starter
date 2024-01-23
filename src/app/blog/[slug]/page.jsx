import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src='https://images.pexels.com/photos/19882770/pexels-photo-19882770/free-photo-of-surfur-with-a-surfboard-walking-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src='https://images.pexels.com/photos/19882770/pexels-photo-19882770/free-photo-of-surfur-with-a-surfboard-walking-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis
          pellentesque. Fusce finibus mattis convallis. Nunc auctor lacinia dapibus. Sed mollis
          ultricies purus eu dignissim. Nulla luctus tincidunt consequat. Cras congue massa
          vulputate, tristique mauris mattis, commodo lectus. In accumsan lacinia lorem, vitae
          maximus leo ultrices ac. Quisque at lobortis velit.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
