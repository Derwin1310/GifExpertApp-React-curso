import React from 'react'

//Aqui estamos usando de manera desestructurada las propiedades que le asignamos en GifGrid a GGI, y usamos el titulo y la url para mostrarlos en una etiqueta img en la ol que tenemos en GifGrid
export const GifGridItem = ({title, url}) => {
    console.log(title,url)
  return (
    <div>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
