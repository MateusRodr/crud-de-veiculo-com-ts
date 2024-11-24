import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (QueryInterface: QueryInterface) => {
    await QueryInterface.createTable('vehicle',{
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    plate:{
        type: new DataTypes.STRING(9),
        allowNull: false,
    },
    chassi:{
        type: new DataTypes.STRING(17),
        allowNull:false,
    },
    renavam: {
      type: DataTypes.STRING(11),
      allowNull: false,
  },
    model: {
        type: new DataTypes.STRING(30),
        allowNull:false,
    },
    brand:{
        type: new DataTypes.STRING(30),
        allowNull:false,
    },
    year:{
        type: new DataTypes.INTEGER,
        allowNull:false,
    },
    });
  },
  down: async (QueryInterface: QueryInterface) => {
    await QueryInterface.dropTable('vehicle')
  },
};