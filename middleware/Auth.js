import jwt from "jsonwebtoken";

//chcek token and if exist
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).send("you are not authorized !");
  }
  jwt.verify(token, process.env.JWTSECRET, (err, user) => {
    if (err) {
      return res.status(403).send("Sorry your token isn't valid !");
    }
    req.user = user;
    next();
  });
};

//check user with token

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).send("you are not authorized !");
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.IsAdmin) {
      next();
    } else {
      return res.status(403).send("you are not admin sorry !");
    }
  });
};
