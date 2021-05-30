

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

function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      });

      localStorage.setItem("room name",room_name);
      window.location= "kwitter_page.html";
}


function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("room_name:"+Room_names);
       row= "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log("name");
localStorage.setItem("room_name",name);

window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room name");

      window.location="index.html";
}
