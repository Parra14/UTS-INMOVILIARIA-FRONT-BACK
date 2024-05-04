const Local = require("../models/Locales");

exports.crearLocal = async (req, res) => {

    try{
        let local;

        //Creamos nuestro local

        local = new Local(req.body);

        await local.save();
        res.send(local);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de crear local');
    }
    console.log(req.body);
}

exports.listarLocal = async (req, res) => {

    try{

        const local = await Local.find();
        res.json(local);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de listar los locals');
    }
    console.log(req.body);
}

exports.actualizarLocal = async (req, res) => {

    try{

        const { area, direccion, caracteristicas, zona, oferta, valor,nombrePropietario, telefonoPropietario,llaves} = req.body;
        let local = await Local.findById(req.params.id);

        if(!local){
            res.status(404).json({ msg: 'No existe el local'});
        }

        local.area = area;
        local.direccion = direccion;
        local.caracteristicas = caracteristicas;
        local.zona = zona;
        local.oferta = oferta;
        local.valor = valor;
        local.nombrePropietario = nombrePropietario;
        local.telefonoPropietario = telefonoPropietario;
        local.llaves = llaves;

        local= await Local.findOneAndUpdate({_id: req.params.id}, local, { new: true})
        res.json(local);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el local');
    }
    console.log(req.body);
}

exports.obtenerLocal = async (req, res) => {

    try{

        let local = await Local.findById(req.params.id);

        if(!local){
            res.status(404).json({ msg: 'No existe el local'});
        }
        res.json(local);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el local');
    }
    console.log(req.body);
}


exports.eliminarLocal = async (req, res) => {

    try{

        let local = await Local.findById(req.params.id);

        if(!local){
            res.status(404).json({ msg: 'No existe el local'});
        }

        await Local.findByIdAndDelete({_id: req.params.id});

        res.json({ msg: 'El producto se elimino correctamente'});


    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el local');
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

        let local = await Local.findById(req.params.id);
        console.log(local)

        if(!local){
            res.status(404).json({ msg: 'No existe el local'});
        }

        local.visitas.push({
            nombreInteresado: nombreInteresado,
            telefonoInteresado: telefonoInteresado,
            emailInteresado: emailInteresado,
            fecheyhora: fecheyhora,
            comentario: comentario
           });


        local= await Local.findOneAndUpdate({_id: req.params.id}, local, { new: true})
        res.json(local);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el local');
    }
    console.log(req.body);
}