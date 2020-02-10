module.exports.up = (queryInterface, DataTypes) => {
    return queryInterface.createTable(
        'poems',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER.UNSIGNED
            },
            author: {
                allowNull: false,
                type: DataTypes.STRING
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING
            },
            body: {
                allowNull: false,
                type: DataTypes.TEXT
            },
            userId: {
                type: DataTypes.UUID,
                references: {
                    model: 'users',
                    key: 'id'
                },
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            deletedAt: {
                allowNull: true,
                type: DataTypes.DATE
            }
        },
        {
            charset: 'utf8'
        }
    );
};

module.exports.down = queryInterface => queryInterface.dropTable('poems');
