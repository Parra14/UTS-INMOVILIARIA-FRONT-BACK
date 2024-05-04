const { Schema, model } = require("mongoose");

const VisitasSchema = new Schema(
  {
    nombreInteresado: {
      type: String,
      required: [true, "Campo requerido"],
    },
    telefonoInteresado: {
      type: String,
      required: [true, "Campo requerido"],
    },
    emailInteresado: {
      type: String,
      required: [true, "Campo requerido"],
    },
    fecheyhora: {
      type: Date,
      required: [true, "Campo requerido"],
    },
    comentario: {
      type: String,
      required: [true, "Campo requerido"],
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//model("visita", mensajeSchema);

module.exports = model("visita", VisitasSchema);