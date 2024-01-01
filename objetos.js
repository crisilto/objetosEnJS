class Hospital {
    constructor(codHospital, nombreHospital, direccion, telefono, poblacion, codPostal) {
        this.codHospital = codHospital;
        this.nombreHospital = nombreHospital;
        this.direccion = direccion;
        this.telefono = telefono;
        this.poblacion = poblacion;
        this.codPostal = codPostal;
    }

    mostrarDatos() {
        console.log(`Datos del hospital:
        Código: ${this.codHospital}
        Nombre: ${this.nombreHospital}
        Dirección: ${this.direccion}
        Teléfono: ${this.telefono}
        Población: ${this.poblacion}
        Código Postal: ${this.codPostal}`);
    }
}

class Medico {
    constructor(codMedico, nombre, apellidos, dni, direccion, telefono, poblacion, codPostal, fechaNacimiento, especialidad, sueldo, hospital) {
        this.codMedico = codMedico;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.direccion = direccion;
        this.telefono = telefono;
        this.poblacion = poblacion;
        this.codPostal = codPostal;
        this.fechaNacimiento = fechaNacimiento;
        this.especialidad = especialidad;
        this.sueldo = sueldo;
        this.hospital = hospital;
    }

    cambiaSueldo(nuevoSueldo) {
        this.sueldo = nuevoSueldo;
    }

    retencionMedico(porcentajeRetencion) {
        return this.sueldo * (porcentajeRetencion / 100);
    }

    sueldoFinal() {
        return this.sueldo - this.retencionMedico(10);
    }

    mostrarDatos() {
        console.log(`Datos del médico:
        Código: ${this.codMedico}
        Nombre: ${this.nombre}
        Apellidos: ${this.apellidos}
        DNI: ${this.dni}
        Dirección: ${this.direccion}
        Teléfono: ${this.telefono}
        Población: ${this.poblacion}
        Código Postal: ${this.codPostal}
        Fecha de Nacimiento: ${this.fechaNacimiento}
        Especialidad: ${this.especialidad}
        Sueldo: ${this.sueldo}`);
        if (this.hospital) {
            console.log("Hospital donde trabaja: ");
            this.hospital.mostrarDatos();
        }
    }
}

const hospitalRibera = new Hospital("HR001", "Hospital Ribera", "Calle Principal 123", "123456789", "Valencia", "46001");
const medicoDigestivo = new Medico("MD001", "Juan", "Pérez", "12345678A", "Calle Secundaria 456", "987654321", "Valencia", "46002", "01/01/1980", "Digestivo", 5000, hospitalRibera);
const medicoTraumatologo = new Medico("MT001", "Ana", "García", "87654321B", "Avenida Principal 789", "654321987", "Valencia", "46003", "01/01/1985", "Traumatología", 6000, hospitalRibera);

medicoTraumatologo.cambiaSueldo(2300);

hospitalRibera.mostrarDatos();

console.log("--- Datos del médico Digestivo ---");
medicoDigestivo.mostrarDatos();
console.log(`Su retención es de ${medicoDigestivo.retencionMedico(10)}`);
console.log(`Su sueldo final es de ${medicoDigestivo.sueldoFinal()}`);

console.log('--- Datos del médico Traumatólogo ---');
medicoTraumatologo.mostrarDatos();
console.log(`Su retención es de ${medicoTraumatologo.retencionMedico(10)}`);
console.log(`Su sueldo final es de ${medicoTraumatologo.sueldoFinal()}`);

