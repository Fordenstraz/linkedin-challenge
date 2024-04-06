//set username  and profile image
const userProfile = {
	username: 'Polly Nater',
	jobTitle: 'Bees-ness Manager',
	profilePicture: '../assets/images/bee_icon.png',
};

function loadUserProfile() {
	//load username:
	const usernameElements = document.querySelectorAll('.username');
	for (let name of usernameElements) {
		name.innerText = userProfile.username;
	}
	//load profile  image:
	const profileImageElements = document.querySelectorAll('.profile-pic');
	for (let imgs of profileImageElements) {
		imgs.setAttribute('src', userProfile.profilePicture);
	}
	//load job title:
	const jobTitleElement = document.getElementById('job-title');
	jobTitleElement.innerText = userProfile.jobTitle;
}

loadUserProfile();
