//открытие и закрытие попап
let editButton = document.querySelector('.profile-info__edit-btn');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-btn');

const openPopup = function(){
  popup.classList.add('popup_opened');
}

editButton.addEventListener('click', openPopup);

const closePopup = function(){
  popup.classList.remove('popup_opened');
}

closeButton.addEventListener('click', closePopup);

//Редактирование имени и информации о себе

let formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.popup__name');
let jobInput = formElement.querySelector('.popup__info');
let profileName = document.querySelector('.profile-info__name');
let profileAboutMe = document.querySelector('.profile-info__about-me');

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAboutMe.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
