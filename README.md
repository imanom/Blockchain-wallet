# Blockchain-wallet


This is the Blockchain-wallet project.

We are building a mobile wallet that users use to make / view transactions on the ethereum blockchain. This wallet queries a backend API to retrieve the transactions for that user.


## Installation (For Windows OS only)

Download and extract this folder.
Open the command prompt and redirect to this folder.

(Make sure you have node and npm installed on your system)

### 1. Node

```bash
npm install 
```
- If it throws an error called "'rm' is not recognized as an internal or external command",
try installing CMDER (with git) from this link - [CMDER for windows](https://cmder.net/).
Extract the zip folder anywhere.

- If there's no error in step 1, directly go to step 3.

### 2. Run cmder.exe and cd into your project folder.

```bash
npm install web3
```

### 3. Start the server
If it executes without error, go to your Node cmd, and run:

```bash
npm start
```

This starts the backend server on port 3000!


## API to retrieve transactions for a user

Start the server and hit on postman
```bash
POST:: http://localhost:3000/getTransactions

with a JSON body containing user address in the key "user", for example, like this:
{
	"user":"0x00E0B33cDb3AF8B55CD8467d6d13BC0Ba8035acF"
}
```

You will get a list of transactions made by the user.


## To check Data present in the db
Open cmd and enter : 
```bash
mongo "mongodb+srv://cluster1-jvtpq.mongodb.net/test" --username User1
```
When prompted for password, type User123.

- Type this to see the collections present.
```bash
show collections 
```
- Type this to see data present in collection "Transaction"
```bash
db.Transaction.find()
```
