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