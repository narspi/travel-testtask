import styles from "./styles.module.scss";
import { VkSvgIcon,FbSvgIcon,InstSvgIcon } from "../SvgIcon";

const Social = () => {
  return (
    <ul className={styles.social}>
      <li>
        <a href="#" className={styles.link} aria-label="Вконтакте">
          <VkSvgIcon />
        </a>
      </li>
      <li>
        <a href="#" className={styles.link} aria-label="Инстаграм">
          <FbSvgIcon />
        </a>
      </li>
      <li>
        <a href="#" className={styles.link} aria-label="Фейсбук">
          <InstSvgIcon />
        </a>
      </li>
    </ul>
  );
};

export default Social;
