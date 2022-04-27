import React from 'react';

import styles from './TextArea.module.scss';

type PropsType = {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  isEditable?: boolean;
  name?: string;
};

const TextArea = ({
  onChange,
  label,
  value = '',
  placeholder = '',
  required = false,
  isEditable = false,
  name = '',
}: PropsType) => {
  return (
    <label className={styles.label}>
      {label}
      <textarea
        className={styles.textarea}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={required}
        readOnly={!isEditable}
        name={name}
      />
    </label>
  );
};

export default TextArea;
