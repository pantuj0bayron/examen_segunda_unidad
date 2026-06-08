module.exports = (sequelize, Sequelize) => {
  const alumno_2 = sequelize.define("alumno_2", {
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
  return alumno_2;
};