import jwtDecode from 'jwt-decode'

export const verifyJWT = (jwt: string): boolean => {
  try {
    const jwtDecoded: {
      exp: number
      iat: number
      timestamp: number
      type: number
      userId: number
    } = jwtDecode(jwt)
    return jwtDecoded.exp * 1000 > Date.now()
  } catch (err) {
    return false
  }
}
