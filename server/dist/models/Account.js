import mongoose, { Schema } from "mongoose";
const AccountSchema = new Schema({
    date: { type: String, required: false },
    expend: { type: String, required: false },
    income: { type: String, required: false },
    item: { type: String, required: false },
    memo: { type: String, required: false },
}, {
    versionKey: false,
});
export default mongoose.model("Account", AccountSchema);
//# sourceMappingURL=Account.js.map