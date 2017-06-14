/**
 * Created by artyfykes on 6/14/17.
 */


module.exports = function(sequelize, DataTypes){

    var users = sequelize.define("users", {
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email:{
            type: DataTypes.INTEGER,
            allowNull: false
        },location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        employ: {
            type: DataTypes.STRING,
            allowNull: false
        },
        level: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return users;
};