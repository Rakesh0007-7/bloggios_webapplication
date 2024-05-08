import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import styles from './TextField.module.scss';
import useIsInputFocused from "@/hooks/useIsInputFocused";
import {colors} from "@/styles/Theme";
import {IoClose} from "react-icons/io5";

const TextField = ({
    label,
    placeholder,
    type,
    inputMode,
    value,
    onChange,
    handleClear,
    helperText
                   }) => {

    const [inputRef, isInputFocused] = useIsInputFocused();

    const wrapperStyle = {
        outline: isInputFocused ? `2px solid ${colors.accent50}` : 'none'
    }

    return (
        <div className={styles.textField__mainWrapper__div}>
            <label className={'app_field_label'} htmlFor={label}>
                {label}
            </label>
            <div style={wrapperStyle} className={styles.textField__innerDiv__div}>
                <input
                    ref={inputRef}
                    type={type}
                    inputMode={inputMode}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                {type !== 'password' && value?.length > 0 && <IoClose style={{cursor: 'pointer'}} onClick={handleClear} />}
            </div>
            <label className={'app_field_error_label'} htmlFor={label}>
                {helperText}
            </label>
        </div>
    );
};

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string,
    inputMode: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    handleClear: PropTypes.func,
    helperText: PropTypes.string
}

export default TextField;