const Villa = require("../models/Villas");

exports.crearVilla = async (req, res) => {

    try{
        let villa;

        //Creamos nuestro villa

        villa = new Villa(req.body);
        console.log(villa);
        await villa.save();
        res.send(villa);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de crear villa');
    }
    console.log(req.body);
}

exports.listarVilla = async (req, res) => {

    try{

        const villa = await Villa.find();
        res.json(villa);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de listar los villas');
    }
    console.log(req.body);
}

exports.actualizarVilla = async (req, res) => {

    try{

        const { area, direccion, tamañoParcela, urbanizacion, estancias, caracteristicas, oferta, valor,nombrePropietario, telefonoPropietario, llaves} = req.body;
        let villa = await Villa.findById(req.params.id);

        if(!villa){
            res.status(404).json({ msg: 'No existe el villa'});
        }

        villa.area = area;
        villa.direccion = direccion;
        villa.tamañoParcela = tamañoParcela;
        villa.urbanizacion = urbanizacion;
        villa.estancias = estancias;
        villa.caracteristicas = caracteristicas;
        villa.oferta = oferta;
        villa.valor = valor;
        villa.nombrePropietario = nombrePropietario;
        villa.telefonoPropietario = telefonoPropietario;
        villa.llaves = llaves;

        villa= await Villa.findOneAndUpdate({_id: req.params.id}, villa, { new: true})
        res.json(villa);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el villa');
    }
    console.log(req.body);
}

exports.obtenerVilla = async (req, res) => {

    try{

        let villa = await Villa.findById(req.params.id);

        if(!villa){
            res.status(404).json({ msg: 'No existe el villa'});
        }
        res.json(villa);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el villa');
    }
    console.log(req.body);
}


exports.eliminarVilla = async (req, res) => {

    try{

        let villa = await Villa.findById(req.params.id);

        if(!villa){
            res.status(404).json({ msg: 'No existe el villa'});
        }

        await Villa.findByIdAndDelete({_id: req.params.id});

        res.json({ msg: 'El producto se elimino correctamente'});


    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el villa');
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

        let villa = await Villa.findById(req.params.id);
        console.log(villa)

        if(!villa){
            res.status(404).json({ msg: 'No existe el villa'});
        }

        villa.visitas.push({
            nombreInteresado: nombreInteresado,
            telefonoInteresado: telefonoInteresado,
            emailInteresado: emailInteresado,
            fecheyhora: fecheyhora,
            comentario: comentario
           });


        villa= await Villa.findOneAndUpdate({_id: req.params.id}, villa, { new: true})
        res.json(villa);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el villa');
    }
    console.log(req.body);
}