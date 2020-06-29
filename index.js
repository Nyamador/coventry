'use-strict';

const send = document.querySelector('#send');
const amount = document.querySelector('.amount');
const overlay = document.querySelector('.overlay');
const sendBtn = document.querySelector('#send-btn');

const loader = `<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<path fill="#ffffff" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" transform="rotate(303.774 25 25)">
  <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
  </path>
</svg>`

function toggleForm(){
    send.addEventListener('click', function () {
           send.style.display = 'none';
           overlay.style.display = 'block';
            amount.style.display = 'block';


        })
}

function mimicSending(){
    
    setTimeout(function (){
            sendBtn.style.color = 'green';
            sendBtn.innerHtml = 'Success';
            window.location.reload();
    }, 2000)
    sendBtn.style.padding = '4px';
    sendBtn.innerHTML = loader;
}



sendBtn.addEventListener('click', mimicSending);

toggleForm();