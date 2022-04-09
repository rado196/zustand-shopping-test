interface LoginResultInterface {
  access_token: null | string;
  user_id: null | number;
  full_name: null | string;
}

export const login = (
  email: string,
  password: string
): Promise<LoginResultInterface> => {
  return new Promise<LoginResultInterface>((resolve) => {
    const userData: LoginResultInterface = {
      access_token: "eyJhbGciOiJIsCI6IkpXVCJ9.eyJpc3MiHRwczovL2V",
      user_id: 63501,
      full_name: "Will Smit",
    };

    setTimeout(() => {
      resolve(userData);
    }, 700);
  });
};

export const logout = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 400);
  });
};
