import { authModel } from "../models/auth.model.js";

export const signupController = async (req, res) => {
  try {
    const { userName, email, password, cPassword, gender, hobbies } = req.body;

    if (!userName || email || !password || !cPassword || !gender || !hobbies) {
      res.json({
        success: false,
        message: "All Fields Required",
      });
    }

    const existingUser = await authModel.find({ email });

    if (existingUser) {
      res.json({
        success: false,
        message: "user already exist",
      });
    }

    const user = await authModel.create({
      userName,
      email,
      password,
      cPassword,
      gender,
      hobbies,
    });

    await user.save();

    res.json({
      success: true,
      message: "user signup successfully",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginController = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
