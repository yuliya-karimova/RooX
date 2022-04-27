import React from 'react';

import styles from './TextInput.module.scss';

type PropsType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  isEditing?: boolean;
  width?: string;
  height?: string;
  name?: string;
};

const TextInput = ({
  onChange,
  label,
  value = '',
  placeholder = '',
  required = false,
  isEditing = false,
  width = '100%',
  height = '22px',
  name = '',
}: PropsType) => {
  return (
    <label className={styles.label}>
      {label}
      <input
        style={{ width, height }}
        className={styles.input}
        onChange={onChange}
        type="text"
        value={value}
        placeholder={placeholder}
        required={required}
        readOnly={!isEditing}
        name={name}
      />
    </label>
  );
};

export default TextInput;
