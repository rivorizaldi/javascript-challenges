const baseUrl = "https://api.github.com";
const container = document.querySelector(".main-container");
const searchBar = document.querySelector(".search-bar input");

async function getUser(url) {
  const user = await fetch(url);

  const userJson = await user.json();
  const respStatus = await user.status;

  loadUserContent(userJson, respStatus);
}

function loadUserContent(data, respStatus) {
  console.log(data, respStatus);

  let content = "";

  if (respStatus === 200) {
    content = `
    <div class="user-profile">
        <div class="avatar">
        <img
            src="${data.avatar_url}"
            alt="Profile Picture"
        />
        </div>
        <div class="description">
        <h4>${data.name}</h4>
        <p>
            ${data.bio}
        </p>
        <div class="icon-container">
            <span><i class="fas fa-users"></i> ${data.followers} Followers</span>
            <span><i class="fas fa-running"></i> ${data.following} Following</span>
        </div>
        </div>
    </div>
    `;
  } else if (respStatus === 404) {
    content = `<div class="user-not-found">
                <h3>User Not Found</h3>      
               </div>`;
  }

  container.innerHTML = content;
}

searchBar.addEventListener("change", (e) => {
  if (e.target.value !== "") {
    getUser(`${baseUrl}/users/${e.target.value}`);
  }
});

// getUser(baseUrl);
