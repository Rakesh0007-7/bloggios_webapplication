import styles from './SignupPage.module.scss';
import OAuthSocialButtons from '@/Components/Buttons/OAuthSocialButtons/OAuthSocialButtons';
import PlainDivider from '@/Components/Divider/PlainDivider/PlainDivider';
import SignupForm from '@/Components/Forms/SignupForm/SignupForm';

const Page = () => {
    return (
        <div className={styles.SignupPage__mainContainer__div}>
            <header>
                <h4 className={'app_h4'}>
                Sign Up, It's Easy
                </h4>
                <h4 className={'app_h6'}>
                Bloggios where thoughts connect seamlessly
                </h4>
            </header>

            <main className={styles.SignupPage__mainBody__main}>
                <OAuthSocialButtons/>
            </main>

            <PlainDivider/>

            <SignupForm />
        </div>
    );
};

export default Page;