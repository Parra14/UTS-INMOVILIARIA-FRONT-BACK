const Casa = require("../models/Casas");
const Visita = require("../models/Visitas");


//Para Casa
exports.crearCasa = async (req, res) => {

    try{
        let casa;

        //Creamos nuestro casa

        casa = new Casa(req.body);

        await casa.save();
        res.send(casa);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de crear casa');
    }
    console.log(req.body);
}

exports.listarCasa = async (req, res) => {

    try{

        const casa = await Casa.find();
        res.json(casa);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de listar los casas');
    }
    console.log(req.body);
}

exports.actualizarCasa = async (req, res) => {

    try{

        const { area, direccion, estancias, caracteristicas, oferta, valor,nombrePropietario, telefonoPropietario, llaves} = req.body;
        let casa = await Casa.findById(req.params.id);

        if(!casa){
            res.status(404).json({ msg: 'No existe el casa'});
        }

        casa.area = area;
        casa.direccion = direccion;
        casa.estancias = estancias;
        casa.caracteristicas = caracteristicas;
        casa.oferta = oferta;
        casa.valor = valor;
        casa.nombrePropietario = nombrePropietario;
        casa.telefonoPropietario = telefonoPropietario;
        casa.llaves = llaves;


        casa= await Casa.findOneAndUpdate({_id: req.params.id}, casa, { new: true})
        res.json(casa);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el casa');
    }
    console.log(req.body);
}

exports.agregarVisitaInmueble = async (req, res) => {

    try{

        const { nombreInteresado, telefonoInteresado, emailInteresado, fecheyhora, comentario } = req.body;
        console.log(nombreInteresado);
        console.log(telefonoInteresado);
        console.log(emailInteresado);
        console.log(fecheyhora);
        console.log(comentario);

        let casa = await Casa.findById(req.params.id);
        console.log(casa)

        if(!casa){
            res.status(404).json({ msg: 'No existe el casa'});
        }

        casa.visitas.push({
            nombreInteresado: nombreInteresado,
            telefonoInteresado: telefonoInteresado,
            emailInteresado: emailInteresado,
            fecheyhora: fecheyhora,
            comentario: comentario
           });


        casa= await Casa.findOneAndUpdate({_id: req.params.id}, casa, { new: true})
        res.json(casa);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el casa');
    }
    console.log(req.body);
}

exports.obtenerCasa = async (req, res) => {

    try{

        let casa = await Casa.findById(req.params.id);

        if(!casa){
            res.status(404).json({ msg: 'No existe el casa'});
        }
        res.json(casa);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el casa');
    }
    console.log(req.body);
}


exports.eliminarCasa = async (req, res) => {

    try{

        let casa = await Casa.findById(req.params.id);

        if(!casa){
            res.status(404).json({ msg: 'No existe el casa'});
        }

        await Casa.findByIdAndDelete({_id: req.params.id});

        res.json({ msg: 'El producto se elimino correctamente'});


    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el casa');
    }
    console.log(req.body);
}




//Metodos Local

