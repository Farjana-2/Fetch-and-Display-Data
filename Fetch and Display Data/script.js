const userList = document.getElementById('userList');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUsers() {
  userList.innerHTML = "Loading users...";

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    })
    .then(data => {
      userList.innerHTML = '';
      data.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('user-card');
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userList.appendChild(card);
      });
    })
    .catch(error => {
      userList.innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}

reloadBtn.addEventListener('click', fetchUsers);

// Fetch data on initial load
fetchUsers();
