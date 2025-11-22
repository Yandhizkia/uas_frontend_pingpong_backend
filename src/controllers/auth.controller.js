import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { username, password, role, email } = req.body;

        const exist = await User.findOne({ username });
        if (exist) return res.status(400).json({ message: "Username sudah dipakai" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword,
            role: role || "user"
        });

        await user.save();

        res.status(201).json({ message: "Registrasi berhasil" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(400).json({ message: "Password salah" });

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            message: "Login berhasil",
            token,
            role: user.role,
            user: {
                username: user.username,
                email: user.email,
                name: user.name || user.username, 
                role: user.role
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
