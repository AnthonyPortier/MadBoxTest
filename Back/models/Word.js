'use strict'

module.exports = (sequelize, DataTypes) => {
    const Word = sequelize.define('Word', {
        word: DataTypes.STRING,
        level: DataTypes.INTEGER
    }, {});
    Word.associate = (models) => {
        //associations here
    }
    return Word;
}