import Users from "../models/UsersModel.js";
import bcrypt from "bcrypt";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const tambahUser = async(req, res) => {
    const { username, name, email, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg:"Password dan Confirm Password tidak cocok"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            username : username,
            name : name,
            email : email,
            password : hashPassword
        });
        res.json({msg:"Data users berhasil disimpan"});
    } catch (error) {
       console.log(error); 
    }
}
