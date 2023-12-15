// Specify if our project is in production or development and
// track it with node

// use a ternary oprator to achieve this
export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : process.env.BACKEND_URL;
