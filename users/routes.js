// Import the necessary modules
import * as dao from "./dao.js";
let currentUser = null;

function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  app.post("/api/users", createUser);

 
  const deleteUser = async (req, res) => { };
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    //console.log("users api call", res)
    res.json(users);
  };

  const findUserById = async (req, res) => {
    console.log("SSS",req)
    console.log("SSSB",req.userId)
    console.log("SSSBB",req.params.userId)//getting undefined for req.params.userId
    const user = await dao.findUserById(req.userId);
    res.json(user);
  };

  const updateUser = async (req, res) => {
    try {
      // Perform the update operation with hardcoded data
     // const result = await dao.updateUserById(hardcodedUserData._id, hardcodedUserData);

      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(
      req.body.username);
      
    if (user) {
      res.status(400).json(
        { message: "Username already taken" });
    }
    const currentUser = await dao.createUser(req.body);
    console.log("fv",currentUser)
   //req.session['currentUser'] = currentUser;

    res.json(currentUser);
  };

  const signin = async (req, res) => {
    const { username, password } = req.body;
   // console.log("SIGNINuss", username)
    const currentUser = await dao.findUserByCredentials(username, password);
    console.log("snighdhaBose",currentUser)
   //req.session['currentUser'] = currentUser;

    res.json(currentUser);
  };

   const signout = (req, res) => {
    currentUser = null;
   // req.session.destroy();
    res.json(200);
  };

  const account = async (req, res) => {
    res.json(req.session['currentUser']);
  }; 

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
