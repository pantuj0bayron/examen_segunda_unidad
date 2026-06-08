module.exports = (sequelize, Sequelize) => {
  const alumnos_2 = sequelize.define("alumnos_2", {
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
  return alumnos_2;
};