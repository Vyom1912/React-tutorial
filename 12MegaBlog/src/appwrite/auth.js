// Importing project configuration (where we store our Appwrite URL & Project ID)
import conf from "../conf/conf";

// Importing required classes from Appwrite SDK
// Client -> Used to connect to Appwrite backend
// Account -> Provides all functions related to user accounts (signup, login, logout, etc.)
// ID -> Helper for generating unique IDs (like for new users)
import { Client, Account, ID } from "appwrite";

// We create a class to organize all authentication-related functions
export class AuthService {
  // Create a new Appwrite Client instance
  client = new Client();

  // Declare account (will be initialized in constructor)
  account;

  // The constructor runs automatically when we create "new AuthService()"
  constructor() {
    // Set the Appwrite endpoint (URL where Appwrite server is running)
    this.client
      .setEndpoint(conf.appwriteUrl)
      // Set the project ID to tell Appwrite which project we want to connect with
      .setProject(conf.appwriteProjectId);

    // Create an Account object using the client
    // This will allow us to use account-related functions (signup, login, etc.)
    this.account = new Account(this.client);
  }

  // Function to create a new account (Signup)
  // Takes an object with email, password, and name
  async createAccount({ email, password, name }) {
    try {
      // Call Appwrite's create account function
      // ID.unique() automatically generates a unique ID for this new user
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      // If account creation is successful, log the user in immediately
      if (userAccount) {
        // Calling our own login method
        return this.login({ email, password });
      } else {
        // If somehow account is not created, just return what we got
        return userAccount;
      }
    } catch (error) {
      // If something goes wrong, log the error
      console.log(error);
    }
  }

  // Function to log in user using email + password
  async login({ email, password }) {
    try {
      // Appwrite creates a session (kind of like "keeping the user logged in")
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      // Log any error during login
      console.log(error);
    }
  }

  // Function to get details of the currently logged-in user
  async getCurrentUser() {
    try {
      // Appwrite returns details like userId, name, email, etc.
      return await this.account.get();
    } catch (error) {
      // Log error if no user is logged in or something went wrong
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }

    // Return null if no user is found
    return null;
  }

  // Function to log out the currently logged-in user
  async logout() {
    try {
      // Delete all active sessions of the user (logs them out)
      return await this.account.deleteSessions();
    } catch (error) {
      // Log any error during logout
      console.log("Appwrite service :: logout :: error", error);
    }
  }
}

// Create a single instance of AuthService
// This way, we don't need to write "new AuthService()" everywhere
const authService = new AuthService();

// Export it so we can import and use it in our React components
export default authService;
