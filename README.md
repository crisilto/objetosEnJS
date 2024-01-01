## Creación de Objetos (Hospital y Médico) con Atributos y Métodos

### Hospital

- **Propiedades:**
  - `codHospital`
  - `nombreHospital`
  - `direccion`
  - `telefono`
  - `poblacion`
  - `codPostal`

- **Métodos:**
  - `Hospital`: Permite crear una instancia con los datos de un hospital.

### Médico

- **Propiedades:**
  - `codMedico`
  - `nombre`
  - `apellidos`
  - `dni`
  - `direccion`
  - `telefono`
  - `poblacion`
  - `codPostal`
  - `fechaNacimiento`
  - `especialidad`
  - `sueldo`
  - `Hospital` (objeto)

- **Métodos:**
  - `Medico`: Permite crear una instancia con los datos de un médico.
  - `cambiaSueldo`: Permite cambiar el sueldo del médico.
  - `retencionMedico`: Permite calcular la retención aplicada al sueldo del médico. Se le pasan los datos sueldo y porcentaje de retención.
  - `mostrarDatos`: Muestra los datos del médico y del hospital en el que trabaja.

### Operaciones

- Crear una instancia del objeto `Hospital` llamado `hospitalRibera`.
- Crear dos instancias del objeto llamado `Medico` llamados `medicoDigestivo` y `medicoTraumatologo` que pertenecen al `hospitalRibera`.
- Cambiar el sueldo del `medicoTraumatologo` por 2.300,00€.
- Mostrar los datos de la instancia `hospitalRibera` del objeto `Hospital`.
- Calcular la retención de las dos instancias del objeto `Medico` que hemos creado.
- Mostrar los datos de las dos instancias del objeto `Medico` que hemos creado, así como las retenciones y los sueldos finales de cada una de las instancias del objeto.
