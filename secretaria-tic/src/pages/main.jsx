import React from "react";
import Carrousel from "../components/carrousel";
import InfoCard from "../components/infoCard";
import InfoCardLeft from "../components/infoCardLeft";


export default function Main(){

    const titleBuga = "Buga Avanza";
    const textBuga = "En estos primeros 100 días de liderazgo, hemos visto cómo la visión y la determinación de nuestra alcaldesa han comenzado a transformar nuestra ciudad. Su compromiso inquebrantable con el bienestar de cada ciudadano ha sembrado las semillas de un futuro más próspero y equitativo. Sigamos adelante con la misma fuerza y unidad, porque este es solo el comienzo de un camino lleno de logros y esperanza para todos.";
    const titleDigi = "¡Bienvenido a DigiCampus!";
    const textDigi = "la puerta a tu futuro! Esta plataforma es más que un simple acceso a la educación, es la oportunidad que estabas esperando para transformar tu vida. Gracias al compromiso de la Gobernación del Valle, ahora tienes la posibilidad de acceder a becas universitarias que te permitirán alcanzar tus sueños.";
    const titleAula = "Aula Virtual";
    const textAula = "¡Transforma tu futuro con los cursos gratuitos de la Alcaldía de Guadalajara de Buga! No dejes pasar esta oportunidad de aprender y crecer desde la comodidad de tu hogar. Entra a nuestra aula virtual, descubre una amplia variedad de cursos diseñados para ti y adquiere nuevas habilidades que te abrirán puertas. ¡Inscríbete hoy y comienza tu camino hacia el éxito!";
    const titleOferta = "Nuestra Oferta Institucional";
    const textOferta = "La Secretaría de las Tecnologias de la Informacion y las Comunicaciones, ofrece a toda la comunidad Bugueña una fuerte oferta educativa, con el objetivo de cerrar la gran brecha digital que existe entre la poblacion bugueña. Estamos innovando cada día para asi lograr ofrecer nuevos cursos a toda la comunidad";

    return(
        <div>
            <Carrousel/>
            <InfoCard image={"/images/bugaAvanza/buga_avanza_movil.webp"} link={"/buga-avanza"} title={titleBuga} text={textBuga}/>
            <InfoCardLeft image={"/images/digicampus/digicampus_movil.webp"} link={"/digicampus"} title={titleDigi} text={textDigi}/>
            <InfoCard image={"/images/aulaVirtual/aula_virtual_movil.webp"} link={"/aula-virtual"} title={titleAula} text={textAula}/>
            <InfoCardLeft image={"/images/ofertaInstitucional/oferta_movil.webp"} link={"/oferta-institucional"} title={titleOferta} text={textOferta}/>
        </div>
        
    )
}