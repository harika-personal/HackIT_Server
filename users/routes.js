// Import the necessary modules
import * as dao from "./dao.js";
//import { ObjectID } from 'mongodb'; // Import ObjectID for MongoDB

// Hardcoded user data for demonstration purposes
const hardcodedUserData = {
  _id:"111", // You can use ObjectID for unique identifiers in MongoDB
  username: 'hardcodedUser',
  password: 'hardcodedPassword',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  dob: new Date('1990-01-01'),
  role: 'user',
  address: {
    city: 'Cityville',
    country: 'Countryland',
    postalCode: '12345',
    address: '123 Street'
  }
};

function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  app.post("/api/users", createUser);

 
  const deleteUser = async (req, res) => { };
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    console.log("users api call", res)
    res.json(users);
  };
  const findUserById = async (req, res) => { };
  const updateUser = async (req, res) => {
    try {
      // Perform the update operation with hardcoded data
      const result = await dao.updateUserById(hardcodedUserData._id, hardcodedUserData);

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  const signup = async (req, res) => { };
  const signin = async (req, res) => {
    // Your existing signin logic
    res.json("hahah");
  };
  const signout = (req, res) => { };
  const account = async (req, res) => { };

  // Define your routes
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
}

export default UserRoutes;
