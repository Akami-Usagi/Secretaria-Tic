import React from "react";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const BugaDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 230px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`
const ContentDiv = styled.div`
    width: 97%;
    height: 600px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    display: grid;
    place-items: center;
    overflow: hidden;
    @media (max-width: 500px){
        width: 95%;
        height: 600px;
        
    }
    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`
const TextDiv = styled.div`
    width: 70%;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    @media (max-width: 500px){
        align-items: center;
        width: 85%;
    }
    
`
const Title = styled.h1`
font-size: 2.5em;
@media (max-width: 500px){
    text-align: center;
    font-size: 2.5em;
}
`
const Text = styled.p`
    font-size: 1.4em;
    
    @media (max-width: 500px){
        font-size: 1.3em;
    }
`

const FormDiv = styled.div`
    display: flex;
    width: 500px;
    margin: 50px;
    align-self: center;
    flex-direction: column;
    background-color: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    @media (max-width: 620px){
        width: 100%;
    }
    @media (max-width: 500px){
        width: 85%;
    }
`
const FormLabel = styled.label`
    font-weight: 500;
    margin-bottom: 5px;
`
const FormInput = styled.input`
    border: none;
    height: 40px;
    background-color: #e2e2e2;
    font-size: medium;
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 15px;
`
const FormSelect = styled.select`
    border: none;
    height: 60px;
    background-color: #e2e2e2;
    font-size: medium;
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 15px;
`
const FormButton = styled.button`
    width: 300px;
    height: 50px;
    border: none;
    background-color: #e4e4e4;
    border-radius: 20px;
    font-family: "Montserrat", sans-serif;
    font-size: large;
    transition: ease-in-out 200ms;
    align-self: center;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    &:hover{
        background-color: #a7a7a7;
        font-weight: 600;
        width: 320px;
        color: white;
    }
    @media (max-width: 500px){
        margin-top: 20px;
    }
`
export default function Inscripciones(){

    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [programa, setPrograma] = useState("");
    const [tipo, setTipo] = useState("");

    async function sendData(nombre, documento, tipo, telefono, email, programa){
        let data = {nombre, documento, tipo, telefono, email}
        await addDoc(collection(db, programa), data)
        .then(
            alert("Registrado Satisfactoriamente")
            
        )
    };

    function handleSendData(){
        if (nombre === "" || documento === "" || tipo === "" || telefono === "" || email === "" || programa === "") {
            alert("Debe diligenciar todos los campos para completar el registro")
        }else{
            sendData(nombre, documento, tipo, telefono, email, programa)
            navigate(`/${programa}`)
        }
        
    };

    

    return(
        <BugaDiv>
            <ContentDiv>
            <Image src={`${window.innerWidth <= 500 ? "/images/inscripciones/inscripciones_movil.webp" : "/images/inscripciones/inscripciones_pc.webp"}`} alt="Inscripciones" />
            </ContentDiv>
            <TextDiv>
                <Title>Haz parte de la comunicad Tech del Valle del Cauca</Title>
                <Text>
                    La Secretaría TIC de Buga te invita a ser parte de la revolución tecnológica. Inscríbete en los programas de Talento Tech, Digicampus y la Oferta Institucional de la secretaria TIC y descubre un mundo de oportunidades. A través de cursos prácticos y talleres especializados, adquirirás las competencias necesarias para destacarte en el competitivo mercado laboral del siglo XXI. Desde programación y diseño web hasta inteligencia artificial y ciberseguridad, tenemos una amplia oferta educativa para todos los niveles y edades. ¡No te quedes atrás! ¡Conviértete en un experto en tecnología y construye tu futuro digital!
                </Text>
                <Text>
                    Porque creemos en el potencial de cada persona y queremos brindarte las herramientas para que puedas alcanzar tus metas. Nuestros programas son gratuitos, están diseñados por expertos en la materia y se adaptan a tus necesidades y horarios. Además, contarás con el acompañamiento de un equipo de tutores altamente capacitados que te guiarán en todo momento. No pierdas esta oportunidad de crecer profesionalmente y contribuir al desarrollo tecnológico del Valle del Cauca. ¡Inscríbete ya y sé parte de esta gran comunidad!
                </Text>
                <Text>
                    ¡Completa el siguiente formulario y cambia tu futuro!
                </Text>
                <FormDiv>
                    
                    <FormLabel htmlFor="nombre">Nombre</FormLabel>
                    <FormInput type="text" id="nombre" placeholder="Ingrese su nombre" onChange={(event) => setNombre(event.target.value)}/>

                    <FormLabel htmlFor="documento">Documento</FormLabel>
                    <FormInput type="text" id="documento" placeholder="Ingrese su numero de documento" onChange={(event) => setDocumento(event.target.value)}/>

                    <FormLabel htmlFor="tipo">Tipo de Documento</FormLabel>
                    <FormSelect name="tipo" id="tipo" onChange={(event) =>{
                        setTipo(event.target.value);
                    }}>
                        <option value="">-- Seleccione --</option>
                        <option value="cedula">Cedula</option>
                        <option value="tarjeta identidad">Tarjeta de Identidad</option>
                        <option value="cedula extrangeria">Cedula Extrangería</option>
                        <option value="pasaporte">Pasaporte</option>
                    </FormSelect>

                    <FormLabel htmlFor="telefono">Telefono</FormLabel>
                    <FormInput type="number" id="telefono" placeholder="Ingrese su numero de telefono" onChange={(event) => setTelefono(event.target.value)}/>

                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput type="email" id="email" placeholder="Ingrese su correo electronico" onChange={(event) => setEmail(event.target.value)}/>

                    <FormLabel htmlFor="Programa">Programa</FormLabel>
                    <FormSelect name="programa" id="programa" onChange={(event) =>{
                        setPrograma(event.target.value);
                    }}>
                        <option value="">-- Seleccione el programa --</option>
                        <option value="talento-tech">Talento Tech</option>
                        <option value="digicampus">Digicampus</option>
                        <option value="oferta-institucional">Oferta Institucional Secretaría TIC</option>
                    </FormSelect>

                </FormDiv>
                <FormButton onClick={handleSendData}>Registrarse</FormButton>
                
            </TextDiv>
        </BugaDiv>
    )
}