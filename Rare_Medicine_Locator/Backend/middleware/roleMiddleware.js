const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({
      message: "Admin access only"
    });
  }
};

const pharmacyOnly = (req, res, next) => {
  if (req.user && req.user.role === "pharmacy") {
    next();
  } else {
    res.status(403).json({
      message: "Pharmacy access only"
    });
  }
};

module.exports = {
  adminOnly,
  pharmacyOnly
};