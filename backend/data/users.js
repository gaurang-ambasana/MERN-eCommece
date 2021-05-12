import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@proshop.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Gaurang",
    email: "gaurang@gmail.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "John",
    email: "john@yahoo.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
