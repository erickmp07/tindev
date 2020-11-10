const Dev = require("../models/Dev");

module.exports = {
    async store(request, response) {
        const { user } = request.headers;
        const { devId } = request.params;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            return response.status(400).json({
                error: 'Dev not found.'
            });
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        console.log(`User ${loggedDev.user} liked ${targetDev.user}.`);

        if (targetDev.likes.includes(loggedDev._id)) {
            console.log('You got a Match!');
        }

        return response.json(loggedDev);
    }
};