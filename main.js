// GET DOM Elements
const modal= document.querySelector('#my modal');
const modalBtn =document.querySelector('#modal-btn');
const closeBtn =document.querySelector('.close');

// Events
modalBtn.addEventListener(çlick,openModal);
closeBtn.addEventListener(çlick,closeModal)
window.addEventListener(çlick, outsideclick);

//open
function openmodal(){
    modal,stlye.display = 'block';
}

// close
function closeModal(){
    modal.stlye.display = 'none';
}

// close If Outside Click
function outsideclick(e){
    if(e.target == modal){
        modal.stlye,display = 'none';
    }
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGTKHXUpOHzz6BYoIWYHK8GC1yKPlFFPo",
  authDomain: "tk-online-store.firebaseapp.com",
  projectId: "tk-online-store",
  storageBucket: "tk-online-store.appspot.com",
  messagingSenderId: "17645219683",
  appId: "1:17645219683:web:fffbd1a49437face076d56",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get value
var name = getInpuval('name');
var surname= getInpuval('surname');
var email = getInpuval('email');
var phone = getInpuval('phone');
var message = getInpuval('message');

//save message
saveMessage(name, surname,email, phone, message);

//show alert
document.querySelector('.alert').stlye.display = 'block';

// hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').stlye.display ='none';
},3000);

//clear form
{document,getElementById('contactform').reset();
}

//function to get get form value
function getInpuval(id){
    return document.getElementById(id).value;
}

//save message to firebace
function saveMessage(name, surname ,email, phone, message){
    var newMessageRef = newMessageRef.push();
    newMessageRef.set({
        name:name,
        surname:surname,
        email:email,
        phone:phone,
        message:message,
    });
}