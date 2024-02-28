import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
const decodeToken = () => {
    const token = cookies().get('token')?.value
    if(!token){
        return null
    }
    else{
        try {
            const data = jwt.decode(token)
            return data
        } catch (error) {
            return null
        }
    }
}

export default decodeToken