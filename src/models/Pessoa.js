import { DataTypes } from 'sequelize'
import sequelize from '../database/db.js'

export const Pessoa = sequelize.define('Pessoa', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });

export default Pessoa;
