
const Datainicial={
    listas:[]
}

//type

const AGREGAR_TAREA = 'AGREGAR_TAREA'
const BORRAR_TAREA  = 'BORRAR_TAREA'
const ACTUALIZAR_TAREA = 'ACTUALIZAR_TAREA'
//reducer

 const listreducer =(state=Datainicial,action)=>{
    switch(action.type){
        case AGREGAR_TAREA:
        return{...state,listas:[...state.listas,{id:action.payload.id,tarea:action.payload.tarea} ]}
        case ACTUALIZAR_TAREA:
            return{...state,listas:[...state.listas.filter(elem=>elem.id !== action.payload.id),{id:action.payload.id,tarea:action.payload.tarea} ]}
        case BORRAR_TAREA:
            return{...state,listas:[...state.listas.filter(elem=>elem.id !== action.payload)]}
default:return state;
    }
}

//accion

export const AgregarNuevaTarea=(list)=>(dispatch,getState)=>{
dispatch({
    type:AGREGAR_TAREA,
    payload:{
        id:list.id,
        tarea:list.tarea   
    }
})

}
export const BorrarTarea=(id)=>(dispatch,getState)=>{
dispatch({
    type:BORRAR_TAREA,
    payload:id
})
}

export const ActualizarTarea=({tarea,id})=>(dispatch,getState)=>{
    dispatch({
        type:ACTUALIZAR_TAREA,
        payload:{
            tarea,
            id
        }
    })
    }

export default listreducer