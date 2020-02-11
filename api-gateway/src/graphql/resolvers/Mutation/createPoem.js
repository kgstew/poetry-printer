import UsersService from '#root/adapters/UsersService';

const createPoemResolver = async (obj, { author, body, title }, context) => {
    if (!context.res.locals.userSession) throw new Error('Not logged in!');

    const userId = context.res.locals.userSession.userId;

    return await UsersService.createPoem({ author, body, title, userId });
};

export default createPoemResolver;
