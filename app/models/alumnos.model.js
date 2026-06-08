module.exports = (sequelize, Sequelize) => {
  const alumnos = sequelize.define("alumnos", {
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
  return alumnos;
  
};