var firebaseConfig = {
      apiKey: "AIzaSyDtzq9dzR9Kt02YPD05z_jg5DasmnhoI_M",
      authDomain: "kwitter-aea7e.firebaseapp.com",
      databaseURL: "https://kwitter-aea7e-default-rtdb.firebaseio.com",
      projectId: "kwitter-aea7e",
      storageBucket: "kwitter-aea7e.appspot.com",
      messagingSenderId: "309614524005",
      appId: "1:309614524005:web:ce8e09c21f5ffc5170788c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room name");

    function send(){
          msg= document.getElementById("msg").value;

          firebase.database().ref(room_name).push({
                name:user_name,
                message: msg,
                like: 0
          });

          document.getElementById("msg").innerHTML="";
    }


function getData() 
{
       firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room name");

      window.location="index.html";
}
