import React from 'react';

import styles from './TextInput.module.scss';

type PropsType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  isEditable?: boolean;
  name?: string;
};

const TextInput = ({
  onChange,
  label,
  value = '',
  placeholder = '',
  required = false,
  isEditable = false,
  name = '',
}: PropsType) => {
  const isValid = () => {
    return value.length > 0;
  };

  return (
    <label className={styles.label}>
      {label}
      <input
        className={`${styles.input} ${isEditable ? styles['input_editable'] : ''} ${
          isValid() ? '' : styles['input_error']
        }`}
        onChange={onChange}
        type="text"
        value={value}
        placeholder={placeholder}
        required={required}
        readOnly={!isEditable}
        name={name}
      />
    </label>
  );
};

export default TextInput;
