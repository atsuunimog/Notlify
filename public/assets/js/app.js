/**
 * Application toggle
 */
 var state = 0;
 var form_container = document.getElementById("form_container");
 function addTodo(obj){
     obj.children[0].classList.toggle('ion-android-remove');
   if(state == 0){
     form_container.classList.remove('d-none');
     state = 1;
   }else{
     form_container.classList.add('d-none');
     state = 0; 
   }
 }
 
/**
 * check if browser supports service worker and register service worker. 
 * Register service workers
 */
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js');
}

/**
 * Init push notification 
 */
Notification.requestPermission().then((result)=>{
  if(result !== 'granted'){
  //take action...
  }
})

/**
 * Create template notification
 */
function triggerNotification(title_data, notification_data){
  var title = title_data;
  var options = {
    body: notification_data,
    icon:'./assets/icon/apple-icon-152x152.png'
  }
  new Notification(title, options);
}


// triggerNotification('Notification Update', "Send your notification update");


/**
 * todo app
 */
const todo_btn = document.querySelector("#submit_todo");
const todo_form = document.querySelector("#form_container");
//setup fetch api properties
const options = {
  method:'POST',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json'
  },
  body:JSON.stringify(data)
}

todo_btn.addEventListener("click",(event)=>{
     event.preventDefault();
     let form_data = new FormData(todo_form);
     let data = {};
     //create obj with form values..
    form_data.forEach((val, key)=>{
      data[key] = val;
    })

    //setup fetch api
    fetch("./server.js", options);
})