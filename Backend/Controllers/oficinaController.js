const Oficina = require("../models/Oficina");

exports.crearOficina = async (req, res) => {

    try{
        let oficina;

        //Creamos nuestro oficina

        oficina = new Oficina(req.body);

        await oficina.save();
        res.send(oficina);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de crear oficina');
    }
    console.log(req.body);
}

exports.listarOficina = async (req, res) => {

    try{

        const oficina = await Oficina.find();
        res.json(oficina);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de listar los oficinas');
    }
    console.log(req.body);
}

exports.actualizarOficina = async (req, res) => {

    try{

        const { idEncargado, nombre, direccion, telefono, correo, zona} = req.body;
        let oficina = await Oficina.findById(req.params.id);

        if(!oficina){
            res.status(404).json({ msg: 'No existe el oficina'});
        }

        oficina.idEncargado = idEncargado;
        oficina.nombre = nombre;
        oficina.direccion = direccion;
        oficina.telefono = telefono;
        oficina.correo = correo;
        oficina.zona = zona;

        oficina= await Oficina.findOneAndUpdate({_id: req.params.id}, oficina, { new: true})
        res.json(oficina);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el oficina');
    }
    console.log(req.body);
}

exports.obtenerOficina = async (req, res) => {

    try{

        let oficina = await Oficina.findById(req.params.id);

        if(!oficina){
            res.status(404).json({ msg: 'No existe el oficina'});
        }
        res.json(oficina);



    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el oficina');
    }
    console.log(req.body);
}


exports.eliminarOficina = async (req, res) => {

    try{

        let oficina = await Oficina.findById(req.params.id);

        if(!oficina){
            res.status(404).json({ msg: 'No existe el oficina'});
        }

        await Oficina.findByIdAndDelete({_id: req.params.id});

        res.json({ msg: 'El producto se elimino correctamente'});


    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error al momento de actualizar el oficina');
    }
    console.log(req.body);
}