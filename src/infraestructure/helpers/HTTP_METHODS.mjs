import axios from 'axios'

const GET = async (url, withBearer = false) => {
  if (!url) throw new Error('URL is required')

  if (typeof url !== 'string') throw new Error('URL must be a string')

  try {
    const { data } = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: withBearer ? 'Bearer aSuperSecretKey' : ''
      }
    })
    return data
  } catch (error) {
    throw new Error('Error in GET request')
  }
}

export {
  GET
}
