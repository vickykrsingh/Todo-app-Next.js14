import jwt, { JwtPayload } from 'jsonwebtoken'
import {cookies} from 'next/headers'

export interface IVerifiedData {
    _id:string,
    username:string,
    iat:number
}

const verifyToken = ():JwtPayload|string|null => {
    const token = cookies().get('token')?.value
    console.log(token)
    if(!token){
        return null
    }
    try {
        const verifiedData = jwt.verify(token,process.env.JWT_SECRET!)
        return verifiedData;
        
    } catch (error:any) {
        console.log(error.message)
        return null
    }
}

export default verifyToken