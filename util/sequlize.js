

const Sequelize = require('sequelize');

const sequelize = new Sequelize('test', 'postgres', '9033',{
    host: 'localhost',
    dialect: 'postgres'
   
});
Sequelize.DATE.prototype._stringify = function _stringify(date, options)
{
    date = this._applyTimezone(date, options);

    // Z here means current timezone, _not_ UTC
    // return date.format('YYYY-MM-DD HH:mm:ss.SSS Z');
    return date.format('YYYY-MM-DD HH:mm:ss.SSS');
};
module.exports = sequelize;



