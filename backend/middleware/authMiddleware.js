const isAdmin = (req, res, next) => {
    try {
        const providedKey = req.header('x-admin-key');

        if (!providedKey) {
            return res.status(401).json({ message: 'Access denied. No admin key provided.' });
        }

        if (providedKey !== process.env.ADMIN_SECRET_KEY) {
            return res.status(403).json({ message: 'Access denied. Invalid admin key.' });
        }

        // If the key is valid, proceed to the next function (the controller)
        next();
    } catch (error) {
        res.status(500).json({ message: 'Server error during authentication.' });
    }
};

module.exports = { isAdmin };