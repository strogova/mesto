let editButton = document.querySelector('.profile-info__edit-btn');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-btn');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_edit_name');
let jobInput = formElement.querySelector('.popup__input_edit_job');
let profileName = document.querySelector('.profile-info__name');
let profileAboutMe = document.querySelector('.profile-info__about-me');

//открытие и закрытие попап

const openPopup = function(){
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAboutMe.textContent;
}

const closePopup = function(){
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', closePopup);

//Редактирование имени и информации о себе

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAboutMe.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleFormSubmit);
