import axiosSecure from "."


export const saveUser = async user => {
    const currentUser = {
        email: user?.email,
        role: 'quest',
        status: 'Verified'
    }
    const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data 
}

export const getToken = async email => {
    const { data } = await axiosSecure.post('/jwt', email)
    console.log('Token received from server--------->', data)
    return data 
}

export const clearCookie = async () => {
    const { data } = await axiosSecure.get('/logout')
    return data 
}