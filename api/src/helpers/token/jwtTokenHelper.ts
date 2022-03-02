import jwt, { Secret } from "jsonwebtoken";

const defaultJWTSecret =
  "3eec5b45d7e9f29e67cfff7422a84c59a1aede7ef31c307562fb33ea3cd1d6b0205ff19b5c3c34ab1017d6446eb6ff72d0f5954bb2cfbba9dba87a04e91b5d8c7bf5785c49ff3244b0a5387c9b2ac537cf4ef1f802576227cd9f8f7dcc07367be02e4a0d7833aa1cc0a9dfb8e1597f8f4110eeeeeab5830e939bd988c4d595c804aaf60e01e9ceab1f988bc3396e63feab25af8e3bd913a2a75b7b4c8f7f8c04";

const JwtTokenHelper = {
  generateToken: (userName: string) => {
    const jwtSecret: Secret = process.env.JWT_SECRET || defaultJWTSecret;
    const token = jwt.sign({ user: userName }, jwtSecret, { expiresIn: "24h" });
    return token;
  },
  verifyAccessToken: (token: string) => {
    const jwtSecret: Secret = process.env.JWT_SECRET || defaultJWTSecret;
    return jwt.verify(token, jwtSecret);
  },
};

export default JwtTokenHelper;
