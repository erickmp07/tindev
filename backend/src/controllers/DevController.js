const axios = require('axios');

module.exports = {
    async store(request, result) {
        const { username } = request.body;

        const response = await axios.default.get(`https://api.github.com/users/${username}`);

        return result.json(response.data);
    }
};