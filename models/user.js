module.exports = function(sequelize, DataTypes){
	var user = sequelize.define("user", {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		location: {
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

	return user;
};