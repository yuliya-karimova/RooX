import React from 'react';

import styles from './TextArea.module.scss';

type PropsType = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  isEditing?: boolean;
  width?: string;
  height?: string;
  name?: string;
};

const TextArea = ({
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
      <textarea
        style={{ width, height }}
        className={styles.textarea}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
        readOnly={!isEditing}
        name={name}
      />
    </label>
  );
};

export default TextArea;