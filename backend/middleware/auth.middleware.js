import { getUser } from "../services/auth.service.js";
export async function restrictToLoggedinUserOnly(req, res, next) {
    const userUid = req.cookies?.uid;
    if (!userUid){
        return res.status(401).json({ message: "Unauthorized - No token provided" });
    }
    const user = await getUser(userUid);
    if (!user) return res.redirect("/login");
    req.user = user;
    next();
  }
  export const adminRoute = (req, res, next) => {
	if (req.user && req.user.role === "admin") {
		next();
	} else {
		return res.status(403).json({ message: "Access denied - Admin only" });
	}
};
