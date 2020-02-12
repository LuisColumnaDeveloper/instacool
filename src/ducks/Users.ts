import { Dispatch } from "redux"

import { IServices } from '../services'

export interface ILogin{
    email:string,
    password:string
}

export default function reducer( state = {} ){
    return state
}


export const login = ( { email, password }:ILogin) =>

async (dispatch:Dispatch, getState:() => any , { auth }:IServices) => {    
    
    const result = await auth.signInWithEmailAndPassword(email, password)
    console.log(result);
    
}


export const register = ( { email, password }:ILogin) =>

async (dispatch:Dispatch, getState:() => any , { auth, db }:IServices) => {  
    
    //console.log({email, password});
    
    
     const userCredential = await auth.createUserWithEmailAndPassword(email, password)
     //console.log(user);

     const {  user } = userCredential
        
     const id = user ? user.uid : undefined
     const doc = db.collection('users').doc(id)

     await doc.set({role:'user'})
    
}