class CustomFile {
  constructor () {
    this.name = ''
    this.text = ''
    this.number = 0
    this.hex = ''
  }

  parseFileData (data) {
    if (!data) throw new Error('Data is required')
    if (typeof data !== 'string') throw new Error('Data must be a string')

    const dataSplitted = data.split(',')

    const name = dataSplitted[0] // Nombre del archivo
    const text = dataSplitted[1] // Texto del archivo
    const number = parseInt(dataSplitted[2]) // Número del archivo
    const hex = dataSplitted[3] // Hexadecimal del archivo

    // Validamos que los datos sean correctos y no estén vacíos
    if (!name || !text || !number || !hex) throw new Error('Data is invalid')

    this.name = name
    this.text = text
    this.number = number
    this.hex = hex

    return this
  }
}

export default CustomFile
