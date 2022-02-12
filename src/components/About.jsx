import React from 'react';
import './About.scss'
import CSS from '../img/CSS & HTML.png';
import JS from '../img/JavaScript.png';
import react from '../img/React 2.png';
import sass from '../img/Sass.png'

export default function About(){
    return(
        <div className='central'>
        <h1>Weather App</h1>
        <div className='profile'>
        <div className='photo'>

        </div>
        <div className='description'>
            <h2>Bienvenidos, soy Miguel!</h2>
                <span>Soy programador Full-Stack, apasionado por la tecnologia, los sistemas informaticos,
                la ciencia, el arte y los videojuegos. Comence hace unos años estudiando unicamente HTML y CSS y hoy en dia
                manejo una amplia variedad de tecnologias y herramientas las cuales quiero seguir perfeccionando. Actualmente mi 
                objetivo es poder enfocarme en los lenguajes de programacion basados en IA</span>
        </div>
        </div>
        <div className='section'>
        <div className='skills'>
            <h3>Algunas de las tecnologias que utilice para este proyecto:</h3>
            <div className='logos'>
                <img src={CSS} alt='CSS logo' className='css'/>
                <img src={JS} alt='JS logo' className='js'/>
                <img src={react} alt='React logo' className='react'/>
                <img src={sass} alt='Sass logo' className='sass' />
            </div>
        </div>
        <div className='portfolio'>
            <h3>Portfolio:</h3>
            <div className='capture'></div>
        </div>
        </div>
    
        </div>
    )
}