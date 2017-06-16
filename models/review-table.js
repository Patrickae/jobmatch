
module.exports = function(sequelize, DataTypes){

	var review = sequelize.define("review", {
		companyName:{
			type: DataTypes.STRING,
			allowNull: false
		},
		rating:{
			type: DataTypes.INTEGER,
			allowNull: false
		},
		reviewerStatus:{
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true
		},
		question1:{
			type: DataTypes.TEXT,
			allowNull: false
		},
		question2:{
			type: DataTypes.TEXT,
			allowNull: false
		},
		question3:{
			type: DataTypes.TEXT,
			allowNull: false
		},
		question4:{
			type: DataTypes.TEXT,
			allowNull: false
		},
		question5:{
			type: DataTypes.TEXT,
			allowNull: false
		}
	})

	return review;
};