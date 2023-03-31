import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    versionKey: false,
});
export default mongoose.model("User", UserSchema);
//# sourceMappingURL=User.js.map