import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AgregarNuevaTarea } from "../redux/lista";
import { BorrarTarea } from "../redux/lista";
import { ActualizarTarea } from "../redux/lista";
import { v4 as uuidv4 } from 'uuid';
import '../App.css'                       



const Tareas = () => {
    const [valor, setValor] = useState('');
    const [valoredit, setValoredit] = useState(null);
    const [id, setId] = useState('');
    const dispatch = useDispatch();
    const hola = useSelector(store => store.list.listas);
   

    const handleChange = (e) => {
        setValor(e.target.value);

    };

    const handleChangeEdit = (e) => {
        setValoredit(e.target.value);

    };

    const handleClick = () => {
        if (valor.trim() !== '') {
            const id = uuidv4();
            const valorTarea = {
                id: id,
                tarea: valor
            }

            dispatch(AgregarNuevaTarea(valorTarea));
            setValor('');
        }
    };

    const handleDelete = (id) => {
        dispatch(BorrarTarea(id));
    }
    const handleEdit = (valor) => {
        setId(valor.id)
        setValoredit(valor.tarea)
    }

    const handleSave = (id) => {
        const valorTarea = {
            id: id,
            tarea: valoredit
        }
        dispatch(ActualizarTarea(valorTarea));
        setValor('');
        setId('')
        setValoredit(null)
    }
    return (
        <div className="container">
            <h1 className="text-center"> Lista de Tareas</h1>
            <div className="d-flex justify-content-center"></div>
        <div className="input-group">
  <input type="text" className="form-control" value={valor} onChange={handleChange} />
  <button className="btn btn-outline-secondary" type="button" onClick={()=>{handleClick()}}>Agregar Tarea</button>
 
</div>        
            {hola.map((tarea) => {
                return (
                    <ol key={tarea.id} className="mt-2">
                        {id === tarea.id ? (

                            <> 
                                <div className="input-group">
                                <input type="text" className="form-control" value={valoredit} onChange={handleChangeEdit} />
                                <button className="btn btn-outline-secondary" type="button" onClick={() => handleSave(tarea.id)}>Guardar</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <p><span className="mr-2">{tarea.tarea}</span>
                                <button className="btn btn-danger mr-1" type="button" onClick={() => handleDelete(tarea.id)}>Borrar</button>
                                <button className="btn btn btn-primary" type="button" onClick={() => handleEdit(tarea)}>Editar</button>
                                </p>
                            </>
                        )}
                    </ol>
                )
            })
            }
        </div>
    );
}

export default Tareas;
