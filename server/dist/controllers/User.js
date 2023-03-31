import User from "../models/User.js";
// 유저정보 탐색
const readUser = (req, res, next) => {
    const userId = req.params.userId;
    return User.findById(userId)
        .then((user) => user
        ? res.status(200).json({ user })
        : res.status(404).json({ message: "Not found" }))
        .catch((error) => res.status(500).json({ error }));
};
// 모든 유저 탐색
const readAll = (req, res, next) => {
    return User.find()
        .then((users) => res.status(200).json({ users }))
        .catch((error) => res.status(500).json({ error }));
};
// 유저 정보 업데이트
const updateUser = (req, res, next) => {
    const userId = req.params.userId;
    return User.findById(userId)
        .then((user) => {
        if (user) {
            user.set(req.body);
            return user
                .save()
                .then((user) => res.status(201).json({ user }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            return res.status(404).json({ message: "not found" });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
// 유저 정보 삭제
const deleteUser = (req, res, next) => {
    const userId = req.params.userId;
    return User.findByIdAndDelete(userId)
        .then((user) => user
        ? res.status(201).json({ user, message: "Deleted" })
        : res.status(404).json({ message: "not found" }))
        .catch((error) => res.status(500).json({ error }));
};
export default { readUser, readAll, updateUser, deleteUser };
//# sourceMappingURL=User.js.map