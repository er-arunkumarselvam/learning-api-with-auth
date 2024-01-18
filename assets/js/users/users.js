const ALL_USERS_URL = "https://dummyjson.com/users";

export const getAllUsers = async () => {
  const userResponse = await fetch(ALL_USERS_URL);
  const usersJson = await userResponse.json();

  return usersJson;
};
