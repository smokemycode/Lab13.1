# Social Media API
A Node.js/Express server that connects to MongoDB Atlas. Visiting `/` returns whether the database connection worked.

## Setup
1. `npm install`
2. Create a `.env` file with `MONGO_URI="your_connection_string"`
3. `node server.js`
4. Visit http://localhost:3001/

## Reflection
1. Why is it important to whitelist IP addresses in a real-world production environment? What are the risks of allowing connections from anywhere (0.0.0.0/0)?
    - A whitelist means only listed computers can even try to connect. With 0.0.0.0/0, anyone on the internet can try passwords, and a leaked connection string works from anywhere.
2. What is the purpose of the dotenv package? What other methods could you use to manage environment variables in a production environment (e.g., in a cloud hosting service)?
    - dotenv loads `.env` into `process.env`, so secrets stay out of your code and off GitHub. In production, use your host’s environment variable settings (the Render or Heroku dashboard) or a secret manager (AWS Secrets Manager).
3. If your application failed to connect, what are the first few steps you would take to debug the issue?
    - I would read the terminal error first. Then check `.env` (make sure the right password is added and `< >` is removed), Network Access, the user’s role, and that the cluster is running.