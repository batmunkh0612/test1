import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    username: {
      type: String,
      required: [true, "нэвтрэх нэрээ оруулна уу"],
    },
    mail: {
      type: String,
      required: [true, "mail оруулна уу"],
      mixLength: [20, "too long , 20 н оронтой байна"],
    },
    password: {
      type: String,
      required: [true, "нууц үгээ оруулна уу"],
      minLength: [8, "хэтэрхий богино байна , 8 н оронтой байна"],
    },
    type: {
      type: String,
      enum: ["User", "Baigulga"],
      required: [true],
    },
    serviceType: {
      type: String,
      enum: ["Franchise", "Travel", "Massage", "Repair", "Relax", "Health"],
    },
    role: {
      type: String,
      enum: ["user", "admin", "baigulga"],
      default: "user",
      required: [true, "please specify user role"],
    },
    locate: {
      type: String,
    },
    date: {
      type: Date,
      default: Date,
    },
    Bio: {
      type: String,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.virtual("post", {
  ref: "Post",
  localField: "_id",
  foreignField: "user_id",
});

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", UserSchema);
export default User;
