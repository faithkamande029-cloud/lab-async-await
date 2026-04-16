// Write your code here!
const postContainer = document.getElementById("post-container");

async function getPosts() {
  try {
    // 1. Fetch data from API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // 2. Convert response to JSON
    const posts = await response.json();

    // 3. Loop through posts and display them
    posts.forEach(post => {
      const postCard = document.createElement("div");

      const postTitle = document.createElement("h3");
      postTitle.textContent = post.title;

      const postBody = document.createElement("p");
      postBody.textContent = post.body;

      postCard.appendChild(postTitle);
      postCard.appendChild(postBody);

      postContainer.appendChild(postCard);
    });

  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Run function
getPosts();
