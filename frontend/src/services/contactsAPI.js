const BASE_URL = 'http://localhost:3000'
import axios from 'axios'
export async function getContacts() {

  try {
    const response = await axios.get(`${BASE_URL}/contacts`)
    return response.data
  } catch (error) {

    throw new Error(
      'Erro ao buscar contatos!'
    )
  }

}

export async function postContact(contact) {
  try {

    await axios.post(`${BASE_URL}/contacts/`, contact)

  } catch (error) {
    throw new Error(
      'Erro ao salvar contato!'
    )
  }
}
export async function editContact(id, contact) {
  try {
    await axios.patch(`${BASE_URL}/contacts/${id}`, contact)
  } catch (error) {
    throw new Error(
      'Erro ao editar contato!'
    )
  }
}
export async function deleteContact(id) {
  try {
    await axios.delete(`${BASE_URL}/contacts/${id}`)

  } catch (error) {
    throw new Error(
      'Erro ao deletar contato!'
    )
  }
}