const router = require("express").Router();

const User = require("../models/User");

const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register

router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),

    });


    try {
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }

})


//Login

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json("Wrong password or email");
        }
        else {
            const bytes = CryptoJs.AES.decrypt(user.password, process.env.SECRET_KEY);
            const originalPassword = bytes.toString(CryptoJs.enc.Utf8);


            if (originalPassword !== req.body.password) {
                return res.status(401).json("Wrong password or email");
            }
            else {
                const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin },
                    process.env.SECRET_KEY, { expiresIn: "5d" });

                const { password, ...info } = user._doc;

                return res.status(200).json({ ...info, accessToken });
            }
        }
    } catch (err) {
        return res.status(500).json(err)
    }
})


module.exports = router;