import got from 'got';

import accessEnv from '#root/helpers/accessEnv';

const USERS_SERVICE_URI = accessEnv('USERS_SERVICE_URI');

export default class UsersService {
    static async createUser({ email, password }) {
        const body = await got.post(`${USERS_SERVICE_URI}/users`, { json: { email, password } }).json();
        return body;
    }

    static async fetchUser({ userId }) {
        const body = await got.get(`${USERS_SERVICE_URI}/users/${userId}`).json();
        return body;
    }

    static async createUserSession({ email, password }) {
        const body = await got.post(`${USERS_SERVICE_URI}/sessions`, { json: { email, password } }).json();
        return body;
    }

    static async deleteUserSession({ sessionId }) {
        const body = await got.delete(`${USERS_SERVICE_URI}/sessions/${sessionId}`).json();
        return body;
    }

    static async fetchUserSession({ sessionId }) {
        const body = await got.get(`${USERS_SERVICE_URI}/sessions/${sessionId}`).json();
        return body;
    }

    static async createPoem({ title, body, author, userId }) {
        const postBody = await got.post(`${USERS_SERVICE_URI}/poems`, { json: { title, body, author, userId } }).json();
        return postBody;
    }

    static async fetchPoem({ poemId }) {
        const body = await got.get(`${USERS_SERVICE_URI}/poems/${poemId}`).json();
        return body;
    }

    static async fetchAllPoems() {
        const body = await got.get(`${USERS_SERVICE_URI}/poems`).json();
        return body;
    }
}
