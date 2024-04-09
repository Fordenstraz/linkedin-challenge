//Create a  func to load the user's data to the page:
function loadUserProfile() {
	//load username:
	const usernameElements = document.querySelectorAll('.username');
	for (let name of usernameElements) {
		name.innerText = userProfile.username;
	}
	//load profile  image:
	const profileImageElements = document.querySelectorAll('.profile-pic');
	for (let img of profileImageElements) {
		img.setAttribute('src', userProfile.profilePicture);
	}
	//load job title:
	const jobTitleElement = document.getElementById('job-title');
	jobTitleElement.innerText = userProfile.jobTitle;
}

loadUserProfile();

///////////////////////////////////////////////////////////////////////////////

const createPost = (click, userProfile) => {
	//stop refresh:
	click.preventDefault();

	//grab form data:
	const username = userProfile.username;
	const postTitle = click.target.title.value;
	const postContent = click.target.body.value;
	const postBtn = document.querySelector('#post-btn');

	//check for post content:
	if (postTitle && postContent) {
		//select parent div where post will be created:
		const parentDiv = document.querySelector('.posts');
		//create a new post element:
		const postDiv = document.createElement('div');
		//add the class:
		postDiv.classList.add('posts__item');
		//create the post elements as children, including classes and content:
		//create the post title:
		const postTitlePar = document.createElement('p');
		//add the class:
		postTitlePar.classList.add('posts__title');
		//insert post title content:
		postTitlePar.innerText = username + ' has posted: ' + postTitle;
		//add post title to the new post:
		postDiv.append(postTitlePar);

		//create the post body:
		const postBodyPar = document.createElement('p');
		//add the class:
		postBodyPar.classList.add('posts__content');
		//insert post body text:
		postBodyPar.innerText = postContent;
		//add post body to the new post:
		postDiv.append(postBodyPar);

		//create the post's like button:
		const postLikeBtn = document.createElement('button');
		//add the class:
		postLikeBtn.classList.add('btn--regular');
		//insert button text:
		postLikeBtn.innerText = 'Like';
		//add like button to the new post:
		postDiv.append(postLikeBtn);

		//add the new post element to the parent div:
		parentDiv.prepend(postDiv);
	} else {
		postBtn.setAttribute('disabled');
	}
};

///////////////////////////////////////////////////////////////////////////////

//DOM event to run createPost function on click of 'post' button:
const postButtonElement = document.querySelector('.start-post-user__text');

postButtonElement.addEventListener('submit', event => {
	createPost(event, userProfile);
});
