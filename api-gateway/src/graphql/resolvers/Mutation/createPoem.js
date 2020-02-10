import UsersService from '#root/adapters/UsersService';

const createPoemResolver = async (obj, { author, body, title, userId }, context) => {
    if (!context.res.locals.userSession) throw new Error('Not logged in!');
    return await UsersService.createPoem({ author, body, title, userId });
};

export default createPoemResolver;
