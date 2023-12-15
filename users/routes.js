// Import the necessary modules
import * as dao from "./dao.js";
let currentUser = null;

function UserRoutes(app) {
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
    res.json(user);
  };
  app.post("/api/users", createUser);
  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    //console.log("users api call", res)
    res.json(users);
  };

  const findUserById = async (req, res) => {
   // console.log("SSS", req)
    //console.log("SSSB", req.userId)
    //console.log("SSSBB", req.params.userId)//getting undefined for req.params.userId
    const user = await dao.findUserById(req.userId);
    res.json(user);
  };

  const updateUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const status = await dao.updateUser(userId, req.body);
      currentUser = await dao.findUserById(userId);
      res.json(currentUser);
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
    //console.log("fv",currentUser)
   //req.session['currentUser'] = currentUser;

    res.json(currentUser);
  };

  const signin1 = async (req, res) => {
    const { username, password } = req.body;
    // console.log("SIGNINuss", username)
    const currentUser = await dao.findUserByCredentials(username, password);
    console.log("snighdhaBose1",currentUser.role)
   //req.session['currentUser'] = currentUser;

    res.json(currentUser);
  };

  const signinUser = async (req, res) => {
    const { username, password } = req.body;
   // console.log("SIGNINuss", username)
    const currentUser = await dao.findUserByCredentials(username, password);
   
    if(currentUser && currentUser.role && currentUser.role=='user'){
      console.log("snighdhaBose2",currentUser)
      console.log("snighdhaBose3",currentUser.role)
      res.json(currentUser);
    }else{
      res.json(null);
    }

    
   //req.session['currentUser'] = currentUser;

   // res.json(currentUser);
  };

  const signinOrganizer = async (req, res) => {
    const { username, password } = req.body;
   // console.log("SIGNINuss", username)
    const currentUser = await dao.findUserByCredentials(username, password);
    console.log("snighdhaBose4",currentUser)
    
    if(currentUser && currentUser.role && currentUser.role=='organizer'){
      console.log("snighdhaBose5",currentUser.role)
      res.json(currentUser);
    }else{
      res.json(null);
    }

  };
  const signinAdmin = async (req, res) => {
    const { username, password } = req.body;
   // console.log("SIGNINuss", username)
    const currentUser = await dao.findUserByCredentials(username, password);
    console.log("snighdhaBose4",currentUser)
    
    if(currentUser && currentUser.role && currentUser.role=='admin'){
      console.log("snighdhaBose5",currentUser.role)
      res.json(currentUser);
    }else{
      res.json(null);
    }

  };

   const signout = (req, res) => {
    currentUser = null;
    // req.session.destroy();
    res.json(200);
  };

  const account = async (req, res) => {
    res.json(req.session['currentUser']);
  };

  const deleteUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const deletedUser = await dao.findUserById(userId);

      if (!deletedUser) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      await dao.deleteUser(userId);
      res.json(deletedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };




  // Define your routes
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId/deleteUser", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin/user", signinUser);
  app.post("/api/users/signin/organizer", signinOrganizer);
  app.post("/api/users/admin", signinAdmin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);

  //trying to get data into profile page
  const fetchCurrentUserData = async (req, res) => {

    const { userid } = req.body;
   // console.log("**", req.body.userid);
    const user = await dao.findUserById(req.body.userid);
    // console.log(user);
    res.json(user);
  };
  app.post("/api/users/currentUser", fetchCurrentUserData);

}

export default UserRoutes;
