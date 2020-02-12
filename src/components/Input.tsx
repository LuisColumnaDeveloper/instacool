import * as React from 'react'

import { WrappedFieldProps } from "redux-form";


const style = {
    backroundColor:'#fff',
    border:'1px solid #ddd',
    padding:'10px 15px',
    borderRadius:'4px',
    width:'calc(100% - 30px)',
    marginBottom:'10px'
}

interface IInputProps{
    placeholder?:string,
    label:string
}

const spanStyle= {
    color:'#777',
    fontSize:'10px',
    textTransform:'uppercase',
    fontWeight:900
} as React.CSSProperties




const Input:React.StatelessComponent<WrappedFieldProps & IInputProps> = props =>{

    const { label, input } = props
    
    return(
        <div>
            <span style={spanStyle}>{label}</span>
            <input  {...input} {...props} style={style} />
        </div>
    ) 
}

export default Input 



// export default class Input extends React.Component<IInputProps> {

//     public render(){
//         const { label } = this.props
//         return(
//             <div>
//                 <span style={spanStyle}>{label}</span>
//                 <input { ...this.props } style={style} />
//             </div>
//         )
        
        
//     }

// } 