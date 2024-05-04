const mongoose = require('mongoose');

const CasaSchema = mongoose.Schema({
    area: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    estancias: {
        type: Array,
        default: [
            {
              cantidad: {
                type: Number,
                required: [true, "Campo requerido"],
              },
              descripcion: {
                type: String,
                required: [true, "Campo requerido"],
              }
            }

        ]        
    },
    caracteristicas: {
        type: Array,
        default: [
            {
              descripcion: {
                type: String,
                required: [true, "Campo requerido"],
              }
            }
        ]        
    },
    zona: {
        type: String,
        required: true
    },
    oferta: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    nombrePropietario: {
        type: String,
        required: true
    },
    telefonoPropietario: {
        type: String,
        required: true
    },
    llaves: {
        type: String,
        required: false
    },
    visitas: {
        type: Array,
        default: [
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
            }
        ]        
    },
    
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('casa', CasaSchema)