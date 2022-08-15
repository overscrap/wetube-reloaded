const fakeUser = {
    username: "Overscrap",
    loggedIn: false,
};

export const trending = (req, res) =>
    res.render("home", { pageTitle: "Home", fakeUser: fakeUser });
export const search = (req, res) => res.render("search", { pageTitle: "Search" });

export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const upload = (req, res) => res.render("upload", { pageTitle: "Upload" });
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video" });