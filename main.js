// principal.js (Archivo principal)
const GestorDeTareas = require('./gestorDeTareas');

async function main() {
    const gestorDeTareas = new GestorDeTareas();

    const tareas = [
        new Promise(resolve => {
            setTimeout(() => {
                gestorDeTareas.agregarTarea('Tarea 1');
                resolve();
            }, 100);
        }),
        new Promise(resolve => {
            setTimeout(() => {
                gestorDeTareas.agregarTarea('Tarea 2');
                resolve();
            }, 200);
        }),
        new Promise(resolve => {
            setTimeout(() => {
                gestorDeTareas.completarTarea(0);
                resolve();
            }, 300);
        }),
        new Promise(resolve => {
            setTimeout(() => {
                gestorDeTareas.eliminarTarea(1);
                resolve();
            }, 400);
        })
    ];

    await Promise.all(tareas);

    console.log('Tareas pendientes:');
    gestorDeTareas.obtenerTareasPendientes().forEach(tarea => console.log(tarea));

    console.log('Tareas completadas:');
    gestorDeTareas.obtenerTareasCompletadas().forEach(tarea => console.log(tarea));
}

main();