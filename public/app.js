const postsDiv = document.querySelector("#posts");
const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const saveButton = document.querySelector("#save-button");
const categoriesSelect = document.querySelector("#categories");

saveButton.addEventListener("click", (e) => {
  e.preventDefault();

  const categories = [...categoriesSelect.selectedOptions].map(
    (option) => option.value
  );

  fetch("/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value,
      categories,
    }),
  })
    .then((data) => data.json())
    .then(({ post, message }) => {
      swal("Great", message, "success");

      usernameInput.value = "";
      titleInput.value = "";
      contentInput.value = "";

      const h2 = document.createElement("h2");
      h2.textContent = post.username;

      const h3 = document.createElement("h2");
      h3.textContent = post.title;

      const p = document.createElement("p");
      p.textContent = post.content;

      const a = document.createElement("a");
      a.textContent = "read more";
      a.href = `/posts/${post.id}/show`;

      const section = document.createElement("section");
      section.appendChild(h2);
      section.appendChild(h3);
      section.appendChild(p);
      section.appendChild(a);

      const ul = document.createElement("ul");

      if (post.categories[0] !== null) {
        post.categories.forEach((category) => {
          const li = document.createElement("li");
          li.textContent = category.name;
          ul.append(li);
        });
      }

      section.appendChild(ul);

      const hr = document.createElement("hr");

      postsDiv.appendChild(section);
      postsDiv.appendChild(hr);
    })
    .catch((err) => console.log(err));
});

fetch("/posts")
  .then((data) => data.json())
  .then((posts) => {
    postsDiv.textContent = "";

    posts.forEach((post) => {
      const h2 = document.createElement("h2");
      h2.textContent = post.username;

      const h3 = document.createElement("h2");
      h3.textContent = post.title;

      const p = document.createElement("p");
      p.textContent = post.content;

      const a = document.createElement("a");
      a.textContent = "read more";
      a.href = `/posts/${post.id}/show`;

      const section = document.createElement("section");
      section.appendChild(h2);
      section.appendChild(h3);
      section.appendChild(p);
      section.appendChild(a);

      const ul = document.createElement("ul");

      if (post.categories[0] !== null) {
        post.categories.forEach((category) => {
          const li = document.createElement("li");
          li.textContent = category.name;
          ul.append(li);
        });
      }

      const hr = document.createElement("hr");

      section.appendChild(ul);

      postsDiv.appendChild(section);
      postsDiv.appendChild(hr);
    });
  })
  .catch((err) => console.log(err));

fetch("/categories")
  .then((data) => data.json())
  .then((categories) => {
    categories.forEach((c) => {
      const option = document.createElement("option");
      option.value = c.id;
      option.textContent = c.name;
      categoriesSelect.appendChild(option);
    });
  })
  .catch((err) => console.log(err));
