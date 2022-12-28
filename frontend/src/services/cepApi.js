import axios from 'axios'

const BASE_URL = 'https://viacep.com.br/ws'

export async function getAddress(zipcode) {
  try {

    const response = await axios.get(`${BASE_URL}/${zipcode}/json`)

    return { city: response.data.localidade, address: response.data.logradouro }
  } catch (error) {
    throw new Error(
      'Erro ao buscar endereço!'
    )
  }
}