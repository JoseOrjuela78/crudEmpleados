const express = require('express');
const app = express();
app.use(express.json());

/** array con contiene los empleados creeados */
const Empleados = [];

/** objeto con contiene los datos de cada empleado  */
const Empleado = {
    "id": 0,
    "nombre": '',
    "apellido": '',
    "edad": 0,
    "correo": ""
}


app.post('/crearEmpleado', (req, res) => {




    /** body que recibe de la vista*/
    const { id, nombre, apellido, edad, correo } = req.body;

    /** atributos recibidos en el body*/
    id;
    nombre;
    apellido;
    edad;
    correo;

    /** valida typo de datos de atributos recibidos*/

    const typeId = typeof id;
    const typeNombre = typeof nombre;
    const typeApellido = typeof apellido;
    const typeEdad = typeof edad;
    const typeCorreo = typeof correo;

    /** valida el tipo de dato y contenido correcto  de las variables recibidas */
    if (typeof id == 'string' || typeof edad == 'string' || typeof nombre != 'string' || typeof apellido != 'string' || typeof correo != 'string') {
        res.json({
            ok: false,
            msg: 'error de tipo de datos'
        })

    } else if (id == 0 || nombre == '' || apellido == '' || edad == 0 || correo == '') {

        res.json({
            ok: false,
            msg: 'datos incompletos'
        })

    };

    /** Asignamos los valores recibidos en el body al objeto empleado */
    Empleado.id = id;
    Empleado.nombre = nombre;
    Empleado.apellido = apellido;
    Empleado.edad = edad;
    Empleado.correo = correo;

    /** insertamos el objeto empleado en el array empleados y se devuelve resultado a la vista */
    Empleados.push(Empleado);

    res.json({
        ok: true,
        Empleados
    })


})

app.listen(3000)
console.log('servidor en linea');