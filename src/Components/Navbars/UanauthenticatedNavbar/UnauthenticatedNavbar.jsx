import './UnauthenticatedNavbar.scss';
import ImageWrapper from "../../ImageWrapper/ImageWrapper.jsx";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {LOGIN_PAGE, SIGNUP_PAGE} from "../../../utils/PathConstants.jsx";

const UnauthenticatedNavbar = () => {

    const navigate = useNavigate();

    return (
        <nav className={'navbar__mainContainer__nav'}>
            <div className={'navbar__leftInfo__div'}>
                <ImageWrapper
                    size={44}
                />

                <div className={'navbar__searchBar__div'}>
                    <FaSearch />
                    <input
                        readOnly={true}
                        type="text"
                        placeholder={'Search Bloggios'}
                    />
                </div>
            </div>

            <div className={'navbar__rightInfo__div'}>
                <button onClick={()=> navigate(LOGIN_PAGE)}>Login</button>
                <button onClick={()=> navigate(SIGNUP_PAGE)}>Join for Free</button>
            </div>
        </nav>
    );
};

export default UnauthenticatedNavbar;