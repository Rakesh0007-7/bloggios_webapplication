import styles from './FilledButton.module.scss';
import PropTypes from "prop-types";
import {colors} from "@/styles/Theme";
import BasicLoader from "@/Components/Loaders/BasicLoader/BasicLoader";

const FilledButton = ({
    label,
    style,
    onClick,
    background = colors.accent100,
    color = colors.primaryColor,
    height = 40,
    spinnerColor = colors.primaryColor,
    isLoading = false,
    isDisabled = false,
    type = 'button'
                      }) => {

    const inlineStyle = {
        height: height,
        background: background,
        color: color,
        cursor: isLoading ? 'progress' : isDisabled ? 'not-allowed' : 'pointer',
    };

    const combinedStyles = {
        ...style,
        ...inlineStyle
    };

    return (
        <button
            style={combinedStyles}
            className={styles.filledButton__mainButton__button}
            onClick={onClick}
            disabled={isDisabled}
            type={type}
        >
            {isLoading ? (
                <BasicLoader
                    height={height - 10}
                    color={spinnerColor}
                />
            ) : label}
        </button>
    );
};

FilledButton.propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func,
    background: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.number,
    spinnerColor: PropTypes.string,
    isLoading: PropTypes.bool,
    isDisabled: PropTypes.bool,
    type: PropTypes.string,
}

export default FilledButton;