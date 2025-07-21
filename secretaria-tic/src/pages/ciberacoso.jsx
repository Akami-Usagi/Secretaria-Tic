import React from "react";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';


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
const FormCheck = styled.input`
    border: none;
    height: 35px;
    width: 35px;
    background-color: #e2e2e2;
    font-size: medium;
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 15px;
    margin-right: 15px;
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
const FormText = styled.textarea`
    border: none;
    height: 140px;
    background-color: #e2e2e2;
    font-size: medium;
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 15px;
    font-family: "Montserrat", sans-serif;
`
const FormSelect = styled.select`
    border: none;
    height: 55px;
    background-color: #e2e2e2;
    font-size: medium;
    padding: 20px;
    border-radius: 15px;
    margin-bottom: 15px;
`

export default function Ciberacoso(){

    const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [documento, setDocumento] = useState("");
    const [eps, setEps] = useState("");
    const [tipo, setTipo] = useState("");
    const [terminos, setTerminos] = useState(false);
    

    async function sendData(nombre, tipo, documento, eps, email, telefono, mensaje, programa){
        let data = {nombre, tipo, documento, eps, email, telefono, mensaje}
        await addDoc(collection(db, programa), data)
        .then(
            alert("Tu caso a sido Registrado Satisfactoriamente, muy pronto nos comunicaremos contigo.")
            
        )
    };

    const enviarCorreo = async ({ nombre, email, mensaje, telefono, documento, eps, tipo }) => {
        try {
            const serviceID = 'service_0fx412n';
            const templateID = 'template_0l6et13';
            const publicKey = 'vrOjicKcsIpsOaPRz'; 

            const templateParams = {
                nombre: nombre,
                tipo: tipo,
                documento: documento,
                eps: eps,
                email: email,
                telefono: telefono,
                mensaje: mensaje,    
            };
        console.log(templateParams);
            
        const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
            console.log('✅ Correo enviado', response.status, response.text);
            return true;
        } catch (error) {
            console.error('❌ Error al enviar correo', error);
            return false;
        }
        };

    function handleSendData(){
        if (nombre === "" || mensaje === "" || telefono === "" || email === "" || tipo === "" || documento === "" || eps === "") {
            alert("Debe diligenciar todos los campos para completar el registro")
        }else if (terminos === false){
            alert("Debes confirmar que aceptas los términos de la política de tratamiento de datos personales")
        }else{
            enviarCorreo({nombre, tipo, documento, eps, email, telefono, mensaje})
            sendData(nombre, tipo, documento, eps, email, telefono, mensaje, "ciberacoso")
            
            navigate(`/`)
        }
        
    };

   
    

    return(
        <BugaDiv>
            <ContentDiv
            initial={{ opacity: 0,  y: -100 }}
            animate={{ opacity: 1,  y: 0}}
            transition={{ duration: .8 }}>
            <Image src={`${window.innerWidth <= 700 ? "/images/ciberacoso/acoso_movil.webp" : "/images/ciberacoso/acoso_pc.webp"}`} alt="Ciberacoso" />
            </ContentDiv>
            <TextDiv>
                <Title>Ruta de Atención contra el Ciberacoso y el Ciberbullying</Title>
                <Text>
                    ¿Has sido víctima o conoces a alguien que esté atravesando una situación de ciberacoso o ciberbullying? No estás solo. En la Secretaría TIC trabajamos por una comunidad digital más segura, respetuosa y empática. Sabemos que estas situaciones pueden generar miedo, confusión o aislamiento, y por eso hemos creado esta ruta de atención como un espacio seguro donde puedas expresar lo que estás viviendo y recibir apoyo profesional.
                </Text>
                <Text>
                    Te invitamos a llenar el formulario con tus datos y una descripción del caso. Esta información será enviada directamente a nuestro equipo de psicología, quien se comunicará contigo para brindarte un acompañamiento cercano, humano y completamente confidencial. Queremos escucharte, ayudarte a comprender lo que estás viviendo y caminar contigo en este proceso, ofreciéndote el respaldo que mereces desde el primer contacto.
                </Text>
                <Text>
                    *Antes de completar el formulario Consulte los términos de nuestra política de tratamiento de datos personales en el siguiente <a href="https://guadalajaradebugavalledelcauca.micolombiadigital.gov.co/sites/guadalajaradebugavalledelcauca/content/files/001619/80928_politica-de-tratamiento-de-datos-personales-v2.pdf " target="blank"> Enlace</a> 

                </Text>
          
                <FormDiv>
                    
                    <FormLabel htmlFor="nombre">Nombre</FormLabel>
                    <FormInput type="text" id="nombre" placeholder="Ingrese su nombre" onChange={(event) => setNombre(event.target.value)}/>

                    <FormLabel htmlFor="tipo">Tipo de Documento</FormLabel>
                    <FormSelect id="tipo" onChange={(event) =>{
                        setTipo(event.target.value)
                    }}>
                        <option value="">-- Seleccione --</option>
                        <option value="Tarjeta Identidad">Tarjeta de Identidad</option>
                        <option value="Cedula">Cedula de Ciudadanía</option>
                        <option value="Registro Civil">Registro Civil</option>
                    </FormSelect>

                    <FormLabel htmlFor="documento">Numero de Documento</FormLabel>
                    <FormInput type="number" id="documento" placeholder="Ingrese su numero de Documento" onChange={(event) => setDocumento(event.target.value)}/>
                        
                    <FormLabel htmlFor="eps">EPS</FormLabel>
                    <FormInput type="text" id="eps" placeholder="Ingrese su EPS" onChange={(event) => setEps(event.target.value)}/>
                    

                    <FormLabel htmlFor="telefono">Telefono</FormLabel>
                    <FormInput type="number" id="telefono" placeholder="Ingrese su numero de telefono" onChange={(event) => setTelefono(event.target.value)}/>

                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput type="email" id="email" placeholder="Ingrese su correo electronico" onChange={(event) => setEmail(event.target.value)}/>

                    <FormLabel htmlFor="mensaje">Mensaje</FormLabel>
                    <FormText type="text" id="mensaje" placeholder="Cuentanos tu caso" onChange={(event) => setMensaje(event.target.value)}/>

                    <CheckDiv>
                        <FormCheck type="checkbox" id="terminos" name="terminos" onChange={(event) => {
                            setTerminos(event.target.checked)
                        }}/>
                        <FormLabel htmlFor="terminos">Confirmo que estoy de acuerdo con los términos de la política de tratamiento de datos personales</FormLabel>
                    </CheckDiv>
                    

                </FormDiv>
                <FormButton onClick={handleSendData}>Registra tu Caso</FormButton>
                
            </TextDiv>
        </BugaDiv>
    )
}