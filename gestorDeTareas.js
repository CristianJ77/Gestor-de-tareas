// gestorDeTareas.js (Archivo de implementación)
class GestorDeTareas {
    constructor() {
        this.tareasPendientes = [];
        this.tareasCompletadas = [];
    }

    agregarTarea(tarea) {
        this.tareasPendientes.push(tarea);
        console.log(`Tarea agregada: ${tarea}`);
    }

    completarTarea(idTarea) {
        if (idTarea >= 0 && idTarea < this.tareasPendientes.length) {
            const tarea = this.tareasPendientes.splice(idTarea, 1)[0];
            this.tareasCompletadas.push(tarea);
            console.log(`Tarea completada: ${tarea}`);
        }
    }

    eliminarTarea(idTarea) {
        if (idTarea >= 0 && idTarea < this.tareasPendientes.length) {
            const tarea = this.tareasPendientes.splice(idTarea, 1)[0];
            console.log(`Tarea eliminada: ${tarea}`);
        }
    }

    obtenerTareasPendientes() {
        return [...this.tareasPendientes];
    }

    obtenerTareasCompletadas() {
        return [...this.tareasCompletadas];
    }
}

module.exports = GestorDeTareas;


