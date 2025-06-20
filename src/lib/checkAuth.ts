import axios from "axios";

const checkAuth = async () => {
  try {
    const res = await axios.get("/api/auth/validate", { withCredentials: true })
    return !!res.data.loggedIn;
  } catch (err) {
    console.error(err)
    return false;
  }
}

export  { checkAuth }