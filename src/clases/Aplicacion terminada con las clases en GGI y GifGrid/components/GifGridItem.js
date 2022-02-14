import React from 'react'

export const GifGridItem = ({title, url}) => {
  return (
    //Aqui estamos colocando las animaciones de css de la pagina Animate.css, y la insertamos linkeandola en el html de public, en la pagina estan las instrucciones para aplicar los estilos.
    //Aqui le estamos aplicando un estilo a las imagenes que se muestran en la aplicacion.
    <div className='card animate__animated animate__backInLeft animate__delay-2s'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}
