# firebase-realtime-database
MIT xPro Week 26 Video 26.5

You now need to create a [Realtime Database](https://firebase.google.com/docs/database)for your Firebase project. Start it in test mode, which will allow you to experiment with the functionality.

In your HTML file, add the references to the Firebase and the Firebase database libraries; you can then include the code that will configure the database UI. In the database.js file, add starter code for the Firebase configuration, which you can copy from the project settings page. Follow the steps in the video to complete the database configuration.

1. Create realtime database on the firmbase website. This will add a line to the configuration object for your project.

It is the line for ```dadtabaseURL:```

```
{
	apiKey: "AIzaSyA0Qwq8mysTh3V1jSksRwKsKdgZ1cxJ_O8",
  	authDomain: "authentification-984e3.firebaseapp.com",
  	databaseURL: "https://authentification-984e3-default-rtdb.firebaseio.com",
  	projectId: "authentification-984e3",
  	storageBucket: "authentification-984e3.appspot.com",
  	messagingSenderId: "67601999533",
  	appId: "1:67601999533:web:aa0fe9acf57e382027c824"
}
```

2. Add the firbase libraries, input field and buttons to the html.

```
<!DOCTYPE html>
<html>
<head>
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
</head>
<!--define UI input field and buttons -->
<input id="message" type="text" placeholder="Text to write to DB"><br>
<button id="write">Write</button>
<button id="read">Read</button><br>
<div id="status"></div>
<script src="database.js"></script>

</html>
```

3. Create the firebase function

```
(function(){

}());
```

- Define the Web App's configuration object. This is provided in the firbase project settings. An example of the object is shown in step 1 above.

- Initialize Firebase

- Add the database feature

- get UI elements by id

- enter code to write a meassage to the database

- enter code to read messages from the database

```
(function(){

	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	var firebaseConfig = {
		apiKey: "AIzaSyA0Qwq8mysTh3V1jSksRwKsKdgZ1cxJ_O8",
  		authDomain: "authentification-984e3.firebaseapp.com",
  		databaseURL: "https://authentification-984e3-default-rtdb.firebaseio.com",
  		projectId: "authentification-984e3",
  		storageBucket: "authentification-984e3.appspot.com",
  		messagingSenderId: "67601999533",
  		appId: "1:67601999533:web:aa0fe9acf57e382027c824"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);


	//===handle on features===========================
	
	//===feature 1: handle firebase db================
	const db = firebase.database();

	//======get UI elements by id=====================
	const message = document.getElementById('message');
	const write   = document.getElementById('write');
	const read	  = document.getElementById('read');
	const status  = document.getElementById('status');

	// write
	write.addEventListener('click', e => {
		const messages = db.ref('messages');

		// simple id - ok for example, do not use in production
		const id = (new Date).getTime(); 

		// write to db
		messages.child(id).set({'message' : message.value})
			.then(function(){
				status.innerHTML = "Wrote to DB!";
			});
	});

	// read
	read.addEventListener('click', e => {
		status.innerHTML = '';
		const messages = db.ref('messages');

		messages.once('value')
		  .then(function(dataSnapshot) {
		  	var data = dataSnapshot.val();
		  	var keys = Object.keys(data);

		  	keys.forEach(function(key){
		  		console.log(data[key]);
				status.innerHTML += JSON.stringify(data[key]) + '<br>';
		  	});
		});
	});
}());
```

4. Drag the html to the browser and submit a message. Check the firebase project realtime database to see if the massage was added.

