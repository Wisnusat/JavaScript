'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class tagihan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.tagihan, {
                foreignKey: 'id_tagihan',
                as: 'tagihan'
            })
        }
    };
    tagihan.init({
        id_tagihan: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_penggunaan: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bulan: DataTypes.STRING,
        tahun: DataTypes.STRING,
        jumlah_meter: DataTypes.FLOAT,
        status: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'tagihan',
        tableName: 'tagihan'
    });
    return tagihan;
};