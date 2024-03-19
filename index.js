$(document).ready(function () {
    $("#btn_enviar").click(()=>{
        guardar_json();
    })
});

function guardar_json(){
    let mi_json = {
        nombre: $("#nombre").val(),
        apellido: $("#apellido").val(),
        dui: $("#dui").val(),
        nit: $("#nit").val(),
        nacimiento: $("#nacimiento").val(),
        carrera: $("#carrera").val(),
        materiaFavorita: $("#materiaFavorita").val(),
        descripcionMateriaFavorita: $("#descripcionMateriaFavorita").val(),

        
    }
    console.log("Hola mi nombre es " + mi_json.nombre + " y mi apellido es " + mi_json.apellido + "y mi DUI es " + mi_json.dui + " mi numero de NIT es " + mi_json.nit +"\n" +
    "Mi fecha de nacimiento es " + mi_json.nacimiento + " y mi carrera es " + mi_json.carrera + " y mi materia favorita es " + mi_json.materiaFavorita + " me gusta la carrera porque es " + mi_json.descripcionMateriaFavorita);


    mi_json.saludo = prompt("Acceptar para actualizar datos");
    console.log(mi_json.saludo)

    delete mi_json["datos"];
    console.log(mi_json);
};