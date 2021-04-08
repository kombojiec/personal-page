document.addEventListener('DOMContentLoaded', function(){ 
  "use strict";


  // ============================  Обработка формы =================
  const modal = document.querySelector('.modal');
  const modalButton = document.querySelector('.button_tepe_modal');
  const modalCloseButton = document.querySelector('.button_type_close');
  const form = document.querySelector('.modal__window');
  const formSubmitHandler = document.querySelector('.button_type_submit');

  modalButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
  })

  modalCloseButton.addEventListener('click', () => {
    closeModal();
  })

  form.addEventListener('submit', event => {
    event.preventDefault();    
    formHendler();
    closeModal();
  })

  function closeModal(){
    modal.classList.add('hidden');
    form.reset();
  }

  function formHendler(){
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    }
    console.log(data);
  }



  // =========================== Навигация ========================

  const navigation = document.querySelector('.nav');
  document.addEventListener('scroll', event => {
    if(pageYOffset >= 790){
      navigation.style.marginBottom = '0';
      navigation.style.position = 'fixed';
      navigation.style.top = '0';
      navigation.style.left = '10%';
      
      navigation.style.width = '80%';
    }else{
      navigation.style.position = 'static';
      navigation.style.marginBottom = '4rem';
      navigation.style.width = '100%';
    }
  })



  // <<============== document's end =================>>
});