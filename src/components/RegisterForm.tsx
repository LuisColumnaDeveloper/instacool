import * as React from 'react'
import  Input  from "./Input"
import  Button  from "./Button"
import  Center  from "./Center"
import { reduxForm, InjectedFormProps, Field } from "redux-form"
import { Link } from 'react-router-dom'
import { ILogin } from '../ducks/Users';

// class LoginForm extends React.Component<InjectedFormProps> {

//     public render (){

//         const { handleSubmit } = this.props

//         return (
//             <form onSubmit={handleSubmit}>
//                 <Field label='Correo' placeholder='Correo' name='email' type='email' component={Input} />
//                 <Field label='Contraseña' placeholder='Contraseña' name='password' type='password' component={Input} />
//                 <Button block={true}>Enviar</Button>
//                 <Center>
//                     <Link to='/register'>Ir al registro</Link>
//                 </Center>
//             </form>
//         )
//     }
// }

// export default reduxForm({
//     form:'login',
// })(LoginForm)

const RegisterForm: React.FC<InjectedFormProps<ILogin>> = props => {
    
    const { handleSubmit } = props


    console.log('props',props);
    

    return(
        <form onSubmit={handleSubmit}>
            <Field label='Correo' placeholder='Correo' name='email' type='email' component={Input} />
            <Field label='Contraseña' placeholder='Contraseña' name='password' type='password' component={Input} />
            <Button >Enviar</Button>
            <Center>
                <Link to='/'>Iniciar sesión</Link>
            </Center>
        </form>
    )
}


export default reduxForm<ILogin>({
    form:'register',
})(RegisterForm)