
module.exports = function(sequelize, DataTypes){
	
	var company = sequelize.define("company", {
		companyName:{
			type: DataTypes.STRING,
			allowNull: false
		},
		indeedId:{
			type: DataTypes.INTEGER,
			allowNull: false
		},
		experience:{
			type: DataTypes.STRING,
			allowNull: false
		},
		city:{
			type: DataTypes.STRING,
			allowNull: false
		},
		state:{
			type: DataTypes.STRING,
			allowNull: false,
			validate:{
				len:[2]
			}
		}
	})

	return company;
};