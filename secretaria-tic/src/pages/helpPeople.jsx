import React from "react";
import styled from "styled-components";
/*import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";*/
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
/*const FormDiv = styled.div`
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
`*/

export default function HelpPeople(){

    /*const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [direccion, setDireccion] = useState("");
    const [tipo, setTipo] = useState("");

    async function sendData(nombre, documento, tipo, telefono, email, direccion, programa){
        let data = {nombre, documento, tipo, telefono, email, direccion}
        await addDoc(collection(db, programa), data)
        .then(
            alert("Registrado Satisfactoriamente, muy pronto nos comunicaremos contigo.")
            
        )
    };

    function handleSendData(){
        if (nombre === "" || documento === "" || tipo === "" || telefono === "" || email === "" || direccion === "") {
            alert("Debe diligenciar todos los campos para completar el registro")
        }else{
            sendData(nombre, documento, tipo, telefono, email, direccion, "HelpPeople")
            navigate(`/`)
        }
        
    };*/

   
    

    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
            <Image src={`${window.innerWidth <= 700 ? "/images/helpPeople/helppeople_movil.webp" : "/images/helpPeople/helppeople_pc.webp"}`} alt="HelpPeople" />
            </ContentDiv>
            <TextDiv>
                <Title>Potencia tu futuro tecnológico Gracias a HelpPeople y la Secretaría TIC</Title>
                <Text>
                    Queremos expresar nuestro más sincero agradecimiento a todos los que participaron en la convocatoria de becas de HelpPeople. La masiva respuesta y entusiasmo de cada uno de ustedes nos llena de alegría y reafirma nuestro compromiso de seguir apoyando el talento y la educación en el área tecnológica. Su interés demuestra que juntos podemos construir un futuro lleno de oportunidades e innovación.
                </Text>
                <Text>
                    Les invitamos a estar atentos a nuestras próximas comunicaciones, donde daremos a conocer la lista de los ganadores de estas becas transformadoras. Mientras tanto, recuerden que cada paso que den hacia sus metas cuenta y que HelpPeople siempre estará aquí para apoyarles en el camino hacia el éxito. ¡Gracias por creer en esta iniciativa y ser parte de esta comunidad que busca transformar vidas a través del conocimiento!
                </Text>
                {/*<FormDiv>
                    
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
                        <option value="tarjeta identidad">Tarjera de Identidad</option>
                        <option value="cedula extrangeria">Cedula Extrangería</option>
                        <option value="pasaporte">Pasaporte</option>
                    </FormSelect>

                    <FormLabel htmlFor="telefono">Telefono</FormLabel>
                    <FormInput type="number" id="telefono" placeholder="Ingrese su numero de telefono" onChange={(event) => setTelefono(event.target.value)}/>

                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput type="email" id="email" placeholder="Ingrese su correo electronico" onChange={(event) => setEmail(event.target.value)}/>

                    <FormLabel htmlFor="direccion">Direccion</FormLabel>
                    <FormInput type="text" id="direccion" placeholder="Ingrese su direccion" onChange={(event) => setDireccion(event.target.value)}/>

                    
                    

                </FormDiv>
                <FormButton onClick={handleSendData}>Registrarse</FormButton>*/}
                
            </TextDiv>
        </BugaDiv>
    )
}