import { SetStateType } from '../../../../globalTypes';

export type FormFieldType = {
  name: string;
  label: string;
};

export const formFieldList: FormFieldType[] = [
  {
    name: 'name',
    label: 'Name',
  },
  {
    name: 'username',
    label: 'User name',
  },
  {
    name: 'email',
    label: 'E-mail',
  },
  {
    name: 'street',
    label: 'Street',
  },
  {
    name: 'city',
    label: 'City',
  },
  {
    name: 'zipcode',
    label: 'Zip code',
  },
  {
    name: 'phone',
    label: 'Phone',
  },
  {
    name: 'website',
    label: 'Website',
  },
];

// export const validateProfileForm = (
//   refs: ProfileFormRefsToValidate,
//   setErrors: SetStateType<ProfileFormErrorType>
// ) => {
//   const { nameRef, dateRef, countryRef, fileUploaderRef, confirmRef } = refs;
//   let isFormValid = true;
//   const errors: ProfileFormErrorType = {};

//   const nameValue = nameRef.current?.value.trim();

//   if (!nameValue) {
//     errors.nameError = 'The name is required';
//     isFormValid = false;
//   } else if (nameValue.length < 3) {
//     errors.nameError = 'The name should have at least 3 symbols';
//     isFormValid = false;
//   }

//   if (!dateRef.current?.value) {
//     errors.dateError = 'The date is required';
//     isFormValid = false;
//   }

//   if (countryRef.current?.value === 'Select your country') {
//     errors.countryError = 'The country is required';
//     isFormValid = false;
//   }

//   if (!fileUploaderRef?.current?.files || !fileUploaderRef?.current?.files[0]) {
//     errors.fileError = 'The image is required';
//     isFormValid = false;
//   }

//   if (!confirmRef.current?.checked) {
//     errors.confirmError = 'Confirmation is required';
//     isFormValid = false;
//   }

//   setErrors(errors);

//   return isFormValid;
// };

// export const clearProfileFrom = (refs: ProfileFormRefs) => {
//   const { nameRef, dateRef, countryRef, fileUploaderRef, moviesOrSeriesRef, confirmRef } = refs;
//   if (nameRef?.current?.value) nameRef.current.value = '';
//   if (dateRef?.current?.value) dateRef.current.value = '';
//   if (countryRef?.current?.value) countryRef.current.value = 'Select your country';
//   if (fileUploaderRef?.current?.value) fileUploaderRef.current.value = '';
//   if (moviesOrSeriesRef?.current?.value) moviesOrSeriesRef.current.checked = true;
//   if (confirmRef?.current?.value) confirmRef.current.checked = false;
// };
