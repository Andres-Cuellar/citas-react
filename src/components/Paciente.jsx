const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, nombrePropietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar este paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };
  // () => eliminarPaciente(id)

  return (
    <div className="mx-5  bg-white shadow-md px-5 py-10 rounded-lg mb-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Mascota: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Propietario: {""}
        <span className="font-normal normal-case">{nombrePropietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Correo Propietario: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className=" md:flex">
        <button
          type="button"
          className="py-2 md:mr-3 px-10 sm:inline-block   bg-indigo-600 hover:bg-indigo-700 rounded-md text-white uppercase font-bold"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 rounded-md text-white uppercase font-bold"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
