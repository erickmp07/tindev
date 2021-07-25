- Create a free [MongoDB cluster](https://www.mongodb.com/cloud/atlas);
- Copy the connection string with the format:
```
mongodb+srv://<user>:<password>@<cluster_address>/<database>
```

Where:
- user - your username.
- password - your password.
- cluster_address - the address of the cluster.
- database - the name of the database.

NOTE: The database should have a collection named 'devs'.

- Paste the connection string in the [server](./src/server.js) file.