import {CarritoContext} from "./CarritoContext"
import { useReducer } from "react";

//vamos a meter un reducer ...
const initialState = [];
const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "[CARRITO] agregar producto":
            return [...state, action.payload]   //devuelve todo más la compra hecha (el producto nuevo)
        case "[CARRITO] eliminar producto":
            return state.filter(item=>(item.id!==action.payload));  //devuelve solo cuando el id de cada item es diferente al id enviado en el payload
        case "[CARRITO] aumentar cantidad":
            return state.map(item=>{
                if(item.id===action.payload){
                const cant = item.quantity + 1;
                return {...item, quantity:cant}
                }
                return item;
            })
        case "[CARRITO] disminuir cantidad":
            return state.map(item=>{
                if(item.id===action.payload && item.quantity>1){
                const cant = item.quantity- 1;
                return {...item, quantity:cant}
                }
                return item;
            })
        default:
            return state;
    }
};

export const CarritoProvider = ({ children }) => {
    
    const [productsState, dispatch] = useReducer(comprasReducer, initialState);

    const addProduct=(compra)=>{
        compra.added=true;
        compra.quantity = 1;    //cuando se da en agregar se inicializa en uno
        dispatch({
            type:"[CARRITO] agregar producto",
            payload: compra,
        });
    };
    const deleteProduct=(id)=>{
        compra.added=false;
        dispatch({
            type:"[CARRITO] eliminar producto",
            payload: id,
        });
    };
    const addCantidad=(id)=>{
        dispatch({
            type:"[CARRITO] aumentar cantidad",
            payload: id,
        });
    };
    const reduceCantidad=(id)=>{
        dispatch({
            type:"[CARRITO] disminuir cantidad",
            payload: id,
        });
    };
    
    return (
        <CarritoContext.Provider value={{productsState, addProduct, deleteProduct, addCantidad, reduceCantidad}}>
            {children}
        </CarritoContext.Provider>
    )
}
