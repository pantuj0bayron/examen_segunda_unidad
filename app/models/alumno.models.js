module.exports = (sequelize, Sequelize) => {
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
  }, {
    tableName: 'alumnos', // <--- Ahora sí está dentro de la configuración
    timestamps: false     // Recomendado para evitar que busque campos createdAt/updatedAt
  });
  return alumno;
};