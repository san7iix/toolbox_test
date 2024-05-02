import axios from 'axios'

const GET = async (url = '', withBearer = false) => {
  if (!url) throw new Error('URL is required')

  if (typeof url !== 'string') throw new Error('URL must be a string')

  try {
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: withBearer ? 'Bearer aSuperSecretKey' : ''
      }
    })
    return await response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  GET
}
