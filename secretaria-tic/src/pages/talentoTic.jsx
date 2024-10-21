import React from "react";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


const BugaDiv = styled.div`
    width: 100%;
    min-height: calc(100vh - 230px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`
const ContentDiv = styled(motion.div)`
    width: 97%;
    height: 600px;
    border-radius: 20px;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    display: grid;
    place-items: center;
    overflow: hidden;
    @media (max-width: 700px){
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
    @media (max-width: 700px){
        align-items: center;
        width: 85%;
    }
    
`
const Title = styled.h1`
font-size: 2.5em;
@media (max-width: 700px){
    text-align: center;
    font-size: 2.5em;
}
`
const Text = styled.p`
    font-size: 1.4em;
    
    @media (max-width: 700px){
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
    @media (max-width: 700px){
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
    @media (max-width: 700px){
        margin-top: 20px;
    }
`
const CheckDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export default function TalentoTic(){

    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [terminos, setTerminos] = useState(false);
    const [tipo, setTipo] = useState("");

    async function sendData(nombre, documento, tipo, telefono, email, programa){
        let data = {nombre, documento, tipo, telefono, email}
        await addDoc(collection(db, programa), data)
        .then(
            alert("Registrado Satisfactoriamente, muy pronto nos comunicaremos contigo.")
            
        )
    };

    function handleSendData(){
        if (nombre === "" || documento === "" || tipo === "" || telefono === "" || email === "" || terminos === false) {
            alert("Debe diligenciar todos los campos para completar el registro")
        }else{
            sendData(nombre, documento, tipo, telefono, email, "talento-tic")
            navigate(`/`)
        }
        
    };

   
    

    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
            <Image src={`${window.innerWidth <= 700 ? "/images/ticTalent/talent_movil.webp" : "/images/ticTalent/talent_pc.webp"}`} alt="Inscripciones" />
            </ContentDiv>
            <TextDiv>
                <Title>¡Descubre tu Potencial Creativo con TIC Talent Creativo!</Title>
                <Text>
                    Si eres de Buga y sientes pasión por la producción de contenido digital, ¡esta es tu oportunidad! La convocatoria TIC Talent Creativo te invita a mostrar tu ingenio y habilidades en el mundo digital. Ya seas diseñador, creador de contenido, editor de video, o amante de las artes digitales, este es tu momento para brillar. Comparte tu talento y conviértete en un referente de creatividad en nuestra ciudad.
                </Text>
                <Text>
                    No dejes pasar esta oportunidad única de desarrollar tu carrera artistica. Inscríbete ahora y únete a una comunidad vibrante de jóvenes talentosos que, como tú, quieren dejar su huella en la ciudad. ¡Inspírate, crea y transforma tu futuro con TIC Talent Creativo!
                </Text>
                <Text>
                    Conoce las condiciones y restricciones en el siguiente <a href="/Terminos y Condiciones.pdf" target="blank"><strong>enlace</strong></a>
                </Text>
                <Text>
                    Una vez leidos los terminos y condiciones, envia los documentos requeridos al correo <a href="mailto:tic@buga.gov.co" target="blank"><strong>tic@buga.gov.co</strong></a> y luego completa el siguiente formulario de inscripcion.
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
                        <option value="cedula extrangeria">Cedula Extrangería</option>
                        <option value="pasaporte">Pasaporte</option>
                    </FormSelect>

                    <FormLabel htmlFor="telefono">Telefono</FormLabel>
                    <FormInput type="number" id="telefono" placeholder="Ingrese su numero de telefono" onChange={(event) => setTelefono(event.target.value)}/>

                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput type="email" id="email" placeholder="Ingrese su correo electronico" onChange={(event) => setEmail(event.target.value)}/>

                    <CheckDiv>
                        <FormInput type="checkbox" id="terminos" name="terminos" onChange={(event) => {
                            setTerminos(event.target.checked)
                        }}/>
                        <FormLabel htmlFor="terminos">Confirmo que he leído los términos y condiciones del concurso</FormLabel>
                    </CheckDiv>
                    

                </FormDiv>
                <FormButton onClick={handleSendData}>Registrarse</FormButton>
                
            </TextDiv>
        </BugaDiv>
    )
}