import { LOGIN } from "./actionTypes";

const loged = (authentication) => ({
  type: LOGIN,
  user: { ...authentication },
});

export default loged;
