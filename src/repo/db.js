var Ld = require('lodash');
var Faker = require('faker');
var Sequelize = require('sequelize');

var db = new Sequelize('relay', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

var todo = db.define('todo', {
    item: {
        type: Sequelize.STRING
    },
    completed: {
        type: Sequelize.BOOLEAN
    }
}, {freezeTableName: true});


//db.sync({force: true}).then(()=> {
//    Ld.times(10, ()=> {
//        return todo.create({
//            item: Faker.lorem.sentence(),
//            completed: Faker.random.boolean()
//        })
//    })
//});

module.exports=db;