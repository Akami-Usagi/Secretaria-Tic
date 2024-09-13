import React from "react";
import Carrousel from "../components/carrousel";
import InfoCard from "../components/infoCard";
import InfoCardLeft from "../components/infoCardLeft";


export default function Main(){

    const titleBuga = "Buga Avanza";
    const textBuga = "En estos primeros 100 días de liderazgo, hemos visto cómo la visión y la determinación de nuestra alcaldesa han comenzado a transformar nuestra ciudad. Su compromiso inquebrantable con el bienestar de cada ciudadano ha sembrado las semillas de un futuro más próspero y equitativo. Sigamos adelante con la misma fuerza y unidad, porque este es solo el comienzo de un camino lleno de logros y esperanza para todos.";
    const titleDigi = "¡Aprende nuevas tecnologias con nosotros!";
    const textDigi = "La Secretaría TIC de Buga te invita a ser parte de la revolución tecnológica. Inscríbete en los programas de Talento Tech, Digicampus y la Oferta Institucional de la secretaria TIC y descubre un mundo de oportunidades. A través de cursos prácticos y talleres especializados, adquirirás las competencias necesarias para destacarte en el competitivo mercado laboral del siglo XXI. Desde programación y diseño web hasta inteligencia artificial y ciberseguridad, tenemos una amplia oferta educativa para todos los niveles y edades. ¡No te quedes atrás! ¡Conviértete en un experto en tecnología y construye tu futuro digital!";
    const titleAula = "Aula Virtual";
    const textAula = "¡Transforma tu futuro con los cursos gratuitos de la Alcaldía de Guadalajara de Buga! No dejes pasar esta oportunidad de aprender y crecer desde la comodidad de tu hogar. Entra a nuestra aula virtual, descubre una amplia variedad de cursos diseñados para ti y adquiere nuevas habilidades que te abrirán puertas. ¡Inscríbete hoy y comienza tu camino hacia el éxito!";
    const titleOferta = "Nuestra Oferta Institucional";
    const textOferta = "La Secretaría de las Tecnologias de la Informacion y las Comunicaciones, ofrece a toda la comunidad Bugueña una fuerte oferta educativa, con el objetivo de cerrar la gran brecha digital que existe entre la poblacion bugueña. Estamos innovando cada día para asi lograr ofrecer nuevos cursos a toda la comunidad";

    return(
        <div>
            <Carrousel/>
            
            <InfoCard image={"/images/inscripciones/inscripciones_movil.webp"} link={"/inscripciones"} title={titleDigi} text={textDigi}/>
            <InfoCardLeft image={"/images/ofertaInstitucional/oferta_movil.webp"} link={"/formacion-tic"} title={titleOferta} text={textOferta}/>
            <InfoCard image={"/images/aulaVirtual/aula_virtual_movil.webp"} link={"/aula-virtual"} title={titleAula} text={textAula}/>
            <InfoCardLeft image={"/images/bugaAvanza/buga_avanza_movil.webp"} link={"/buga-avanza"} title={titleBuga} text={textBuga}/>
        </div>
        
    )
}