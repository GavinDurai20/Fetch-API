const userContainer = document.getElementById("users");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUsers() {
  userContainer.innerHTML = "<p>Loading users...</p>";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("Network response was not ok");

    const users = await res.json();
    userContainer.innerHTML = "";

    users.forEach(user => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user-card");
      userDiv.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      userContainer.appendChild(userDiv);
    });
  } catch (error) {
    userContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

reloadBtn.addEventListener("click", fetchUsers);
fetchUsers();
