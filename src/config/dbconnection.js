const mysql = require ('mysql')

module.exports = () => {

    return mysql.createConnection({
        host: " bixi3hdpao9ppcwypbu0-mysql.services.clever-cloud.com ",
        user:"ul79tcvxiecmg5lf  ",
        passaword:" yHd5cIEsxORl7mvdKttL ",
        database:" bixi3hdpao9ppcwypbu0 ",
        port: "3306",

    })


}
