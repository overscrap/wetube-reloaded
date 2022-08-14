export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Login" });

export const edit = (req, res) => res.render("editUser", { pageTitle: "Edit User" });
export const remove = (req, res) => res.render("remove", { pageTitle: "Remove" });
export const logout = (req, res) => res.render("logout", { pageTitle: "Logout" });
export const see = (req, res) => res.render("see", { pageTitle: "See", userId: `${req.params.id}` });