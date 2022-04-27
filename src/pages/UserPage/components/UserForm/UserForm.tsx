import React, { useEffect, useState } from 'react';

import { TextArea, TextButton, TextInput } from '../../../../base_components';
import { UserType } from '../../../../globalTypes';
import { formFieldList } from './helpers';

import styles from './UserForm.module.scss';

type PropsType = {
  userInfo: UserType | null;
};

const UserForm = ({ userInfo }: PropsType) => {
  const [isEditable, setisEditable] = useState<boolean>(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [comment, setComment] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    const data = {
      name: userInfo?.name || '',
      username: userInfo?.username || '',
      email: userInfo?.email || '',
      street: userInfo?.address?.street || '',
      city: userInfo?.address?.city || '',
      zipcode: userInfo?.address?.zipcode || '',
      phone: userInfo?.phone || '',
      website: userInfo?.website || '',
    };

    setFormData(data);
  }, [userInfo]);

  useEffect(() => {
    const isValid = Object.values(formData).every((field) => field.length > 0);

    setIsFormValid(isValid);
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isFormValid) {
      e.preventDefault();
      console.log(JSON.stringify(formData));
      setisEditable(false);
    }
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e?.currentTarget?.name;
    const fieldValue = e?.currentTarget?.value;

    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const handleChangeArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e?.currentTarget?.value);
  };

  const turnOnSettingMode = () => {
    setisEditable(true);
  };

  if (!userInfo) return null;

  return (
    <div className={styles.wrapper}>
      <TextButton text="Редактировать" onClick={turnOnSettingMode} />

      <form onSubmit={handleSubmit} className={styles.formWrapper}>
        <div className={styles.inputListWrapper}>
          {formFieldList.map(({ name, label }) => (
            <TextInput
              key={name}
              onChange={handleChangeInput}
              name={name}
              label={label}
              value={formData[name]}
              required
              isEditable={isEditable}
            />
          ))}
          <TextArea
            name="comment"
            key="comment"
            onChange={handleChangeArea}
            label="Comment"
            value={comment}
            required={false}
            isEditable={isEditable}
          />
        </div>
        <TextButton text="Отправить" color="green" isDisabled={!isEditable} />
      </form>
    </div>
  );
};

export default UserForm;
