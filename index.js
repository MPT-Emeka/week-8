const exprss = require('express')
const PORT = 3000;
const User = require('./User');
const app = express();
const mongoose = require('mongoose'); 
const {default: mongoose} = require('mongoose');

app.use(express)
const Database = "mongodb+srv://admin:admin@cluster0.wfe6x0s.mongodb.net/TestDB?retryWrites=true&w=majority"

// mongodb+srv://admin:<password>@cluster0.wfe6x0s.mongodb.net/?retryWrites=true&w=majority

app.get('/', (req, res) =>
{
    return
}
)

app.post("/signup", async (req, res) =>
{
    const reqBody = req.body;
    console.log(reqBody, req.body);
    const user = new User(reqBody);
    console.log(user);
    await user.save();
    return res.status(200).send(user);
})

app.post("/login", async (req, res) =>
{
    const { email, password } = 
})

const StartServer = async () =>
{
    try {

            mongoose.connect(Database)
            console.log("Connected to Database")
            app.listen(PORT, () =>
            {
                console.log(`Server is running on port ${PORT}`);
            })
            
    } catch (error) {
        console.log(error)
    }
}

StartServer()