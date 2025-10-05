import jwt from "jsonwebtoken";

const ensureAuth = async (req, res, next) => {
  const auth = req.headers("authorization");

  if (!auth) {
    return res
      .status(403)
      .json({ message: "Unauthorized,JWT Token is required" });
  }

  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(500).json({ message: "Invalid Token" });
  }
};

export default ensureAuth;
