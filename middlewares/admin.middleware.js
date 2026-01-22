const adminMiddleware = async (req, res, next) => {
  try {
    const userRole = req.user.isAdmin;

    if (!userRole) {
      return res
        .status(403)
        .json({ message: 'Access denied. Only Admin can see this.' });
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = adminMiddleware;
