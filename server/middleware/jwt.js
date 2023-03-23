export const verifyToken = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).send("User not authenticated!");
};
