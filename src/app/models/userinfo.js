import { model, models, Schema } from "mongoose";

const UserInfoSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const UserInfo = models.userinfo || model("userinfo", UserInfoSchema);
export default UserInfo;
