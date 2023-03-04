const editButton = document.querySelector('.profile-info__edit-btn');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-btn');

// открыть попап
editButton.addEventListener('click', function(openPopup){
  popup.classList.add('popup_opened');
  openPopup();
});


//закрыть попап
closeButton.addEventListener('click', function(closePopup){
  popup.classList.remove('popup_opened');
  closePopup();
});


