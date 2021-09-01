// Testing script link
console.log('Hello, World!');
const url = `https://shrouded-mountain-15003.herokuapp.com/https://runsignup.com`
const oauthReqUrl = `/oauth/requestToken.php`
const authUrl = `/OAuth/Verify`
const oauthAccessUrl = `/oauth/accessToken.php`

const request_data = {
    url: url + oauthReqUrl,
    method: `POST`
}

console.log(url + oauthReqUrl)

fetch(url + oauthReqUrl)
.then(response => {
    console.log(response);
    response.json()
    console.log(response);
})
.then(data => console.log(data))