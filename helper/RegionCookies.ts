  export const getCookie = (name) => {
    if (typeof document === "undefined") {
    return null; // Return null on server
  }
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((row) => row.startsWith(name + "="));
    return cookie ? cookie.split("=")[1] : null;
  };