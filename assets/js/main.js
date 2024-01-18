import { getAllUsers } from "./users/users";

const userPlaceholderEl = document.querySelector("#users-placeholder");

const allUsers = await getAllUsers();

allUsers.users.map((user) => {
  userPlaceholderEl.innerHTML += `<li class="bg-slate-100 px-3 py-2 rounded my-3 hover:bg-slate-200">
          <h5 class="font-semibold">${user.firstName} (${user.age})</h5>
          <div>${user.email}</div>
        </li>`;
});
