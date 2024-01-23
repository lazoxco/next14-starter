import Image from 'next/image';
import Link from 'next/link';
import styles from './postCard.module.css';

const postCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src='https://images.pexels.com/photos/19882770/pexels-photo-19882770/free-photo-of-surfur-with-a-surfboard-walking-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt=''
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis
          pellentesque. Fusce finibus mattis convallis. Nunc auctor lacinia dapibus. Sed mollis
          ultricies purus eu dignissim. Nulla luctus tincidunt consequat.
        </p>
        <Link className={styles.link} href='/blog/post'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default postCard;
