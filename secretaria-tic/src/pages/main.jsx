import React from "react";
import Carrousel from "../components/carrousel";
import InfoCard from "../components/infoCard";
import InfoCardLeft from "../components/infoCardLeft";


export default function Main(){

    const titleBuga = "¡Buga Avanza En Lo Digital!";
    const textBuga = "La alcaldesa Karol Martínez ha liderado con éxito la transformación digital de Guadalajara de Buga, enfocándose en cerrar la brecha digital y garantizar que todos los ciudadanos tengan acceso a herramientas tecnológicas. Con el apoyo de la Secretaría TIC, ha impulsado la implementación de programas gratuitos de capacitación en áreas clave como marketing digital, ofimática básica, Excel básico, informática básica, fotografía, fundamentos de programación y vuelo básico de drones. Estos cursos han sido fundamentales para brindar nuevas oportunidades a los ciudadanos, mejorando su empleabilidad y acceso a la información.";
    const titleDigi = "Ingresa al Digicampus";
    const textDigi = "!La puerta a tu futuro! Esta plataforma es más que un simple acceso a la educación, es la oportunidad que estabas esperando para transformar tu vida. Gracias al compromiso de la Gobernación del Valle, ahora tienes la posibilidad de acceder a becas universitarias que te permitirán alcanzar tus sueños.";
    const titleAula = "Aula Virtual";
    const textAula = "¡Transforma tu futuro con los cursos gratuitos de la Alcaldía de Guadalajara de Buga! No dejes pasar esta oportunidad de aprender y crecer desde la comodidad de tu hogar. Entra a nuestra aula virtual, descubre una amplia variedad de cursos diseñados para ti y adquiere nuevas habilidades que te abrirán puertas. ¡Inscríbete hoy y comienza tu camino hacia el éxito!";
    const titleOferta = "¡Avanzando en lo Digital se renueva!";
    const textOferta = "La Secretaría de Tecnologías de la Información y las Comunicaciones sigue fortaleciendo su compromiso con la comunidad bugueña a través de Avanzando en lo Digital 2.0, una estrategia renovada para continuar cerrando la brecha digital. Además de nuestros cursos en Ofimática Básica, Excel, Office, Manejo de Drones y Fundamentos de Programación, ahora incorporamos Ciberseguridad, Introducción a la Realidad Extendida y Manejo de Plataformas Digitales. Seguimos innovando para ofrecer oportunidades de formación accesibles y alineadas con las necesidades del mundo digital. ¡Prepárate para potenciar tus habilidades con nosotros!";
    const titleTech = "¡Haz parte de nuestro Talento Tech!"
    const textTech = "¿Quieres impulsar tu carrera en el mundo digital? ¡Inscribete en los programas de Talento Tech de la gobernacion del Valle del Cauca! Aprende las habilidades más demandadas en el mercado laboral actual, como programación, inteligencia artificial y ciberseguridad. ¡Es tu oportunidad de adquirir conocimientos en alta calidad y abrirte puertas a nuevas oportunidades laborales!"
    const titleHelp = "Impulsando el futuro digital de Buga";
    const textHelp = "La transformación digital de Guadalajara de Buga avanza con pasos firmes, y ahora damos un nuevo impulso con la entrega de 50 becas para formación en programación, gracias a la alianza entre la Secretaría TIC y HelpPeople. Esta iniciativa representa una oportunidad única para que más personas adquieran habilidades tecnológicas clave, fomentando el desarrollo profesional y fortaleciendo el ecosistema digital de nuestra ciudad.";

    return(
        <div>
            <Carrousel/>
            <InfoCardLeft image={"/images/ofertaInstitucional/oferta_movil.webp"} link={"/formacion-tic"} title={titleOferta} text={textOferta}/>
            <InfoCard image={"/images/helpPeople/helppeople_movil.webp"} link={"/helppeople"} title={titleHelp} text={textHelp}/>
            <InfoCardLeft image={"/images/digicampus/digicampus_movil.webp"} link={"/digicampus"} title={titleDigi} text={textDigi}/>
            <InfoCard image={"/images/talentoTech/tech_movil.webp"} link={"/talento-tech"} title={titleTech} text={textTech}/>
            <InfoCardLeft image={"/images/aulaVirtual/aula_virtual_movil.webp"} link={"/aula-virtual"} title={titleAula} text={textAula}/>     
            <InfoCard image={"/images/bugaAvanza/buga_avanza_movil.webp"} link={"/buga-avanza"} title={titleBuga} text={textBuga}/>
        </div>
        
    )
}