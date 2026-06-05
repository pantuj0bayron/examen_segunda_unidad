module.exports = (sequelize, Sequelize)=>
{

const alumno = sequelize.define("alumno", {
    nombre_del_estudiante: {
        type: Sequelize.STRING
    },
    apellido_del_estudiante: {
        type: Sequelize.STRING
    }, 
    edad_del_estudiante: {
        type: Sequelize.INTEGER
    },
    Promedio_del_estudiante: {
        type: Sequelize.INTEGER
    },
    ingreso: {
        type: Sequelize.DATE
    }
});
return alumno;

}