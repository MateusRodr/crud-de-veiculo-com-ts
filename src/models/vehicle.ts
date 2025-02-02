import {Model, DataTypes} from 'sequelize';
import sequelize from '../config/database';

class vehicle extends Model {
    public id!: number;
    public plate!: string;
    public chassi!: string;
    public renavam!: number;
    public model!: string;
    public brand!: string;
    public year!: number;
}

vehicle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        plate:{
            type: new DataTypes.STRING(7),
            allowNull: false,
            unique:true,
        },
        chassi:{
            type: new DataTypes.STRING(17),
            allowNull:false,
            unique:true,
        },
        renavam: {
            type: DataTypes.STRING(11),
            allowNull: false,
            unique:true,
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

    },
    {
        tableName: 'vehicle',
        sequelize
    }
);

export default vehicle;