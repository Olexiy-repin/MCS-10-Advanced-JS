const refs = {
  feedbackForm: document.querySelector('.js-feedback-form'),
};

let formData = {
  username: '',
  email: '',
  message: '',
};

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (formDataFromLS === null) {
    return;
  }

  formData = formDataFromLS;

  const formDataKeys = Object.keys(formDataFromLS);

  formDataKeys.forEach(key => {
    refs.feedbackForm.elements[key].value = formDataFromLS[key];
  });
};

fillFormFields();

const onFeedbackFormFieldChange = event => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value.trim();

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  const formDataValues = Object.values(formData);

  if (formDataValues.includes('')) {
    alert('Усі поля форми мають бути заповнені!');

    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');

  event.currentTarget.reset();
};

refs.feedbackForm.addEventListener('change', onFeedbackFormFieldChange);
refs.feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
