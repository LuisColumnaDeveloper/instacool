import * as React from 'react'
import { Link } from 'react-router-dom'

import  Card  from "../../components/Card";
import  Container  from "../../components/Container";
import  Input  from "../../components/Input";
import  Button  from "../../components/Button";
import  Title  from "../../components/Title";

import  Center  from "../../components/Center";

import { Field } from "redux-form"


export default class Register extends React.Component {
    public render(){
        return(
            <Container center={true}>
                <Card>
                    <Title>Registro</Title>
                    {/* <Input placeholder='Correo' label='Correo' />
                    <Input placeholder='Contraseña' label='Contraseña' /> */}

            <Field label='Correo' placeholder='Correo' name='email' type='email' component={Input} />
            <Field label='Contraseña' placeholder='Contraseña' name='password' type='password' component={Input} />
                    <Button >Enviar</Button>
                    <Center>
                    <Link to='/'>Iniciar sesión</Link>
                    </Center>
                </Card>
            </Container>
        )
    }
}
