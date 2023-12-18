import axios from "axios";

interface CreateUserData {
  email: string;
  password: string;
}

export const createUser = async ({ email, password }: CreateUserData) => {
  const user = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=",
    {
      email,
      password,
      returnSecureToken: true,
    }
  );

  console.log({ user });
};
export const login = async ({ email, password }: CreateUserData) => {
  try {
    const user = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=",
      {
        email,
        password,
        returnSecureToken: true,
      }
    );

    return user.data.idToken;
    console.log({ user }, "login");
  } catch (error) {
    console.log({ error });
  }
};
