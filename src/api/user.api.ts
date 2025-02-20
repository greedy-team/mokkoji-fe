export const getUserInfo = async () => {
    const response = await fetch(`http://${import.meta.env.VITE_API_URL}/user`);
    return response.json();
  };
  
  export const updateUserEmail = async (email: string) => {
    const response = await fetch(`http://${import.meta.env.VITE_API_URL}/user/email`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  
    return response.json();
  };
  