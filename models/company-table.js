
module.exports = function(sequelize, DataTypes){
	
	var company = sequelize.define("company", {
		companyName:{
			type: DataTypes.STRING,
			allowNull: false
		},
		rating:{
			type: DataTypes.INTEGER,
			allowNull: true
		},
		number_reviews:{
			type: DataTypes.INTEGER,
			allowNull: true		
			}
			
	});

	return company;
};
		
