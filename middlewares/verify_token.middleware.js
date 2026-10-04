import jwt from "jsonwebtoken";

// Verifies the JWT on incoming requests
const verify_token = async (req, res, next) => {
      // checking authorization headers
      const authorization = req.headers.authorization;
      if (!authorization) {
            return res.status(401).send({ message: "forbidden access" });
      }
      // checking token
      const token = authorization.split(" ")[1];
      if (!token) {
            return res.status(401).send({ message: "forbidden access" });
      }
      // verify token
      jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                  return res.status(401).send({ message: "forbidden access" });
            }
            req.decoded = decoded;
            next();
      });
};

export default verify_token;
