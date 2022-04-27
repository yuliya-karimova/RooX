import React, { useState } from 'react';

import { TextArea, TextButton, TextInput } from '../../../../base_components';
import { UserType } from '../../../../globalTypes';
import { formFieldList } from './helpers';

import styles from './UserForm.module.scss';

type PropsType = {
  userInfo: UserType | null;
};

const UserForm = ({ userInfo }: PropsType) => {
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // const [formData, setFormData] = useState<Record<string, string>>({
  //   name: userInfo?.name || '',
  //   username: userInfo?.username || '',
  //   email: userInfo?.email || '',
  //   street: userInfo?.address?.street || '',
  //   city: userInfo?.address?.city || '',
  //   zipcode: userInfo?.address?.zipcode || '',
  //   phone: userInfo?.phone || '',
  //   website: userInfo?.website || '',
  //   comment: '',
  // });

  const formData: Record<string, string> = {
    name: userInfo?.name || '',
    username: userInfo?.username || '',
    email: userInfo?.email || '',
    street: userInfo?.address?.street || '',
    city: userInfo?.address?.city || '',
    zipcode: userInfo?.address?.zipcode || '',
    phone: userInfo?.phone || '',
    website: userInfo?.website || '',
    comment: '',
  };

  const handleSubmit = () => {
    console.log('handleSubmit');
  };

  const handleClick = () => {
    console.log('handleClick');
  };

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const fieldName = e.currentTarget.name;
    const fieldValue = e.currentTarget.value;

    formData[fieldName] = fieldValue;
  };

  const handleChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    formData.comment = e.currentTarget.value;
  };

  const turnOnSettingMode = () => {
    setIsEditing(true);
  };

  return (
    <div className={styles.wrapper}>
      <TextButton text="Редактировать" onClick={turnOnSettingMode} />

      <form onSubmit={handleSubmit} className={styles.form}>
        {formFieldList.map(({ name, label }) => (
          <TextInput
            key={name}
            name={name}
            onChange={handleChangeInput}
            label={label}
            value={formData[name]}
            width="50%"
            isEditing={isEditing}
          />
        ))}
        <TextArea
          name="comment"
          key="comment"
          onChange={handleChangeArea}
          label="Comment"
          value=""
          height="55px"
          required={false}
          isEditing={isEditing}
        />
      </form>

      <TextButton text="Отправить" onClick={handleClick} color="green" isDisabled={!isEditing} />
    </div>
  );
};

export default UserForm;
