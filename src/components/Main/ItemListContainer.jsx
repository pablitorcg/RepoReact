import React, { useEffect, useState } from "react";
import {productos} from '../../productos/productos'
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export function ItemListContainer(greeting) {
  const [items, setItems] = useState([]);

  const parametro = useParams();

  useEffect(() => {
    const getProducts = ()=>{
        return new Promise((res,rej)=>{
            const productosFiltrados = productos.filter(
              (prod)=>prod.categoria === parametro.nombreCategoria
              );
            const filtro= parametro.nombreCategoria ? productosFiltrados : productos;
            setTimeout(()=>{
                res(filtro);
            },800);
        });
    };
    getProducts()
    .then((res)=>{
        setItems(res);
    })
    .catch((error)=>{
        console.log(error);
    });
  }, [parametro.nombreCategoria]);

  return (
    <div className="container">
      <h1 className="bienvenida">{greeting.title}</h1>
      <ItemList items={items} />
    </div>
  );
}
