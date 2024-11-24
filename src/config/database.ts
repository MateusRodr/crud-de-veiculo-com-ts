import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('vehicle', 'postgres', 'password',{
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

export default sequelize