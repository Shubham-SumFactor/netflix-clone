import Image from "next/image";
import styles from "./card.module.css";

const Card = (props) => {

    const { imgUrl, size = "medium" } = props;
    
    const classMap ={
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
    };

    return(
        <div className={styles.container}>
        <div>Im a card
                <div className={classMap[size]}>
                     <Image
                         src={ imgUrl }
                         alt="Img"
                         fill="fill"
                         className={styles.cardImg}
                     />
                 </div>
            </div>
            </div>);
};

export default Card;