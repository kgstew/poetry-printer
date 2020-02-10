import UsersService from '#root/adapters/UsersService';

const poemsResolver = async () => {
    return await UsersService.fetchAllPoems();
};

export default poemsResolver;
