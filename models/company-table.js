
module.exports = function(sequelize, DataTypes){
	
	var company = sequelize.define("company", {
		companyName:{
			type: DataTypes.STRING,
			allowNull: false
		},
		city:{
			type: DataTypes.STRING,
			allowNull: false
		},
		rating:{
			type: DataTypes.INTEGER,
			allowNull: false
		},
		number_reviews:{
			type: DataTypes.INTEGER,
			allowNull: false
		
			}
		}
	})

	return company;
};