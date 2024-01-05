'use strict';

const form = document.querySelector('form');
const input = form.elements.email;
const textarea = form.elements.message; 

const LS_KEY = "feedback-form-state";

const obj = JSON.parse(localStorage.getItem(LS_KEY)) || {};

input.value = obj.email || '';
textarea.value = obj.message || '';

const { email, message } = form.elements;

form.addEventListener('input', handleFormInput);

function handleFormInput() {
    obj.email = email.value.trim(),
    obj.message = message.value.trim(),
    
    localStorage.setItem(LS_KEY, JSON.stringify(obj));
};

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    if (obj.email === '' || obj.message === '') {
       return alert('All form fields must be filled in')
    }

    console.log({email: email.value, message: message.value});
    localStorage.removeItem(LS_KEY);
    event.currentTarget.reset();
};