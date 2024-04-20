const firebaseConfig = {
      apiKey: "AIzaSyBueIf7XYXjHZ6jJNBJ27RG6DzF9L6GWhU",
      authDomain: "codeghost-1.firebaseapp.com",
      databaseURL: "https://codeghost-1-default-rtdb.firebaseio.com",
      projectId: "codeghost-1",
      storageBucket: "codeghost-1.appspot.com",
      messagingSenderId: "42662496755",
      appId: "1:42662496755:web:eb8a3905c4a843c0cbea86"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding the Roomname"
      });

      localStorage.setItem("room_name", room_name)
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - "+Room_names)
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem(room_name);
      window.location = "kwitter_page.html"
}