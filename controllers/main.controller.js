// 1. check username & password in login request
//      a. if valid/exist create token send to client
//      b. if not send error to client

// 2. setup auth so only JWT can access the dashboard

const CustomAPIError = require("../errors/custom-error");
const login = async (req, res) => {
    const { username, password } = req.body;
    console.log({ username, password });

    if (username && password) {
        return res.status(200).send("Fake Login/Register/Signup Route");
    }
    throw new CustomAPIError("Please provide username & password", 400);
};

const dashBoard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg: `Hello, John Doe`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
};

module.exports = {
    login,
    dashBoard,
};
