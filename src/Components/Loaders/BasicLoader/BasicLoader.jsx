import styles from './BasicLoader.module.scss';
import {colors} from "@/styles/Theme";
import PropTypes from "prop-types";

const BasicLoader = ({
    height = 50,
    color = colors.accent100
                     }) => {

    const inlineStyle = {
        height: height,
        border: `${height * 0.16}px solid ${color}`
    }

    return (
        <div style={inlineStyle} className={styles.basicLoader__mainWrapper__div} />
    );
};

BasicLoader.propTypes = {
    height: PropTypes.number,
    color: PropTypes.string
}

export default BasicLoader;