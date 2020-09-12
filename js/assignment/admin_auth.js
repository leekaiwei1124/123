const admin_email = [
	"polarbearyap2@gmail.com",
	"cheongfoongkin@gmail.com",
	"polarbearyap2@1utar.my",
	"wongpv@utar.edu.my",
	"sclim@utar.edu.my",
];

function onSignIn(googleUser) {
	let profile = googleUser.getBasicProfile();

	console.log("Family Name: " + profile.getFamilyName());
	console.log("Image URL: " + profile.getImageUrl());

	let name = profile.getName();
	let email = profile.getEmail();

	if (admin_email.includes(email)) {
		console.log("You are an admin!");
		window.location.href = "admin_dashboard.html";

		if (email != admin_email[0]) {
			window.location.href = "admin_dashboard2.html";
		}
	} else {
		console.log("Access denied.");
		window.location.href = "403.html";
	}
}

function onFailure(error) {
	console.log(error);
	document.querySelector("#status").innerHTML = "Please try again.";
}

function renderButton() {
	gapi.signin2.render("google_login", {
		scope: "profile email",
		width: 300,
		height: 70,
		longtitle: true,
		theme: "dark",
		onsuccess: onSignIn,
		onfailure: onFailure,
	});
}
