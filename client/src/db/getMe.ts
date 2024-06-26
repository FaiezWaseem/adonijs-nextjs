

import { cookies } from "next/headers"
import api from "./api"

export async function getAuthorization(){
    const authorization = cookies().get('authorization')
    if (authorization) {
        return authorization?.value.replace('%20', ' ')
    }
    return null
}

export async function getMe() {
    const user = await api('/me')
    return user;
}