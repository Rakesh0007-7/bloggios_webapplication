import styles from './OAuthSocialButtons.module.scss';
import {socialButtonsList} from "@/constants/ListConstants";

const OAuthSocialButtons = () => {
    return (
        <div className={styles.socialButtons__mainContainer__div}>
            {socialButtonsList.map((item)=> (
                <button key={item.id} className={styles.socialButtons__socialButton__button}>
                    {item.icon}
                    <span>{item.label}</span>
                </button>
            ))}
        </div>
    );
};

export default OAuthSocialButtons;