import jwt from "jsonwebtoken";

// Creates a JWT after successful authentication
const create_token = async (req, res) => {
      try {
            const user = req.body;
            const token = jwt.sign(user, process.env.JWT_SECRET, {
                  expiresIn: process.env.TOKEN_EXPIRES_IN || "1d",
            });
            res.status(200).json({
                  message: "Token created successfully",
                  token,
            });
      } catch (error) {
            console.error("Token creation error:", error);

            res.status(500).json({
                  message: "Internal server error",
            });
      }
};

export default create_token;
