const input = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
const avatar = document.querySelector('.avatar');
const profileName = document.querySelector('.name');
const userName = document.querySelector('.username');
const joiningDate = document.querySelector('.joining-date')
const profileBio = document.querySelector('.profile-bio')
const repos = document.querySelector('.repos');
const followers = document.querySelector('.followers')
const following = document.querySelector('.following')
const locationInfo = document.querySelector('.location-text')
const website = document.querySelector('.web-link')
const twitter = document.querySelector('.twitter-link')
const company = document.querySelector('.company-text')
const theme = document.querySelector('.theme')
const themeText = document.querySelector('.theme-text')
const themeIcon = document.querySelector('.theme-icon')

const url = "https://api.github.com/users/"
const deafaultValue = "skimran-coder"
deafultProfile()

async function deafultProfile(){

    try {
        if (deafaultValue != "") {
            const response = await fetch(`${url}${deafaultValue}`)
            const result = await response.json()
            console.log(result);
            displayInfo(result)
        }
    } catch (error) {
        console.log(error);
        // will write here
    }
}



async function findUser(){

    inputValue = input.value.trim()

    try {
        if (input.value != "") {
            const response = await fetch(`${url}${inputValue}`)
            const result = await response.json()
            console.log(result);
            displayInfo(result)
        }
    } catch (error) {
        console.log(error);
        // will write here
    }
}

function formatJoiningDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
}


function displayInfo(result){
    avatar.src = result?.avatar_url
    profileName.innerText = result?.name
    userName.innerText = result?.login
    userName.href = result?.html_url
    joiningDate.innerText = `Joined ${formatJoiningDate(result?.created_at)}`;
    profileBio.innerText = result?.bio
    repos.innerText = result?.public_repos 
    followers.innerText = result?.followers
    following.innerText = result?.followers
    locationInfo.innerText = result?.location
    website.href = result?.blog
    website.innerText = result?.blog
    twitter.href = `https://twitter.com/${result?.twitter_username}`
    twitter.innerText = result?.twitter_username
    company.innerText = result?.company
}

searchBtn.addEventListener('click', findUser)

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 || e.key === 'Enter') {
        findUser()
    }
})

function toggleTheme(){
    document.body.classList.toggle('dark-mode')
    if (themeText.innerText === "Dark") {
        themeText.innerText = "Light"
        themeText.style = "color: white"
        themeIcon.src = 'assets/images/sun-icon.svg'
    }
    else{
        themeText.innerText = "Dark"
        themeIcon.src = 'assets/images/moon-icon.svg'
        themeText.style = "color: var(--lm-text-alt)"
    }
}

theme.addEventListener('click', toggleTheme)

