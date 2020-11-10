const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
    async index(request, response) {
        const { user } = request.headers;

        const loggedUser = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne: user } },
                { _id: { $nin: loggedUser.likes } },
                { _id: { $nin: loggedUser.dislikes } },
            ]
        })
        .sort({ _id: -1 });

        return response.json(users);
    },

    async store(request, response) {
        const { username } = request.body;

        const userExists = await Dev.findOne({
            user: username
        });

        if (userExists) {
            console.log(`User ${username} already exists.`);

            return response.json(userExists);
        }

        const githubResponse = await axios.default.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = githubResponse.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        console.log(`User ${username} created.`);

        return response.json(dev);
    }
};