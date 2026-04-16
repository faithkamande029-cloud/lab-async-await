// Write your code here!
const container = document.getElementById("container");

async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    posts.forEach(post => {
      const h1 = document.createElement("h1");
      h1.textContent = post.title;

      const p = document.createElement("p");
      p.textContent = post.body;

      container.appendChild(h1);
      container.appendChild(p);
    });

  } catch (error) {
    console.log("Error fetching posts:", error);
  }
}

getPosts();
