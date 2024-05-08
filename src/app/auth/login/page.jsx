import styles from './LoginPage.module.scss';
import OAuthSocialButtons from "@/Components/Buttons/OAuthSocialButtons/OAuthSocialButtons";
import PlainDivider from "@/Components/Divider/PlainDivider/PlainDivider";
import LoginForm from "@/Components/Forms/LoginForm/LoginForm";

const Page = () => {
    return (
        <div className={styles.loginPage__mainContainer__div}>
            <header>
                <h4 className={'app_h4'}>
                    Will it. Skill it
                </h4>
                <h4 className={'app_h6'}>
                    Login to your Bloggios Account
                </h4>
            </header>

            <main className={styles.loginPage__mainBody__main}>
                <OAuthSocialButtons/>
            </main>

            <PlainDivider/>

            <LoginForm />
        </div>
    );
};

export default Page;