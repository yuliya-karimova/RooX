import React from 'react';

import styles from './TextButton.module.scss';

type PropsType = {
  text: string;
  color?: 'blue' | 'grey' | 'green';
  isDisabled?: boolean;
  onClick?: () => void;
};

const TextButton = React.memo(function TextButton({
  text,
  color = 'blue',
  isDisabled = false,
  onClick,
}: PropsType) {
  const classNames = `${styles.button} ${
    isDisabled ? styles['button_disabled'] : styles[`button_${color}`]
  }`;

  return (
    <button className={classNames} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
});

export default TextButton;
