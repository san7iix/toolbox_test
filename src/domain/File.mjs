class CustomFile {
  constructor(data, fileName) {
    this.file = fileName
    this.lines = []

    if (data) {
      this.parseAndAssignLines(data)
    }
  }

  parseAndAssignLines(data) {
    if (!data) throw new Error('Data is required')

    if (!Array.isArray(data)) throw new Error('Data must be a array')

    if (data.length === 0) {
      this.lines = []
    }

    // Para cada una de las líneas del archivo
    for (let i = 0; i < data.length; i++) {

      const dataSplitted = data[i].split(',')

      const text = dataSplitted[1] // Texto del archivo
      const number = parseInt(dataSplitted[2]) // Número del archivo
      const hex = dataSplitted[3] // Hexadecimal del archivo

      // Validamos que los datos sean correctos y no estén vacíos
      if (text && number && hex) {

        this.lines.push({
          text,
          number,
          hex
        })
      } else {
        console.warn(`Omitiendo línea ${i} debido a que no tiene todos los datos necesarios, falta alguno de los siguientes: ${text}, ${number}, ${hex}`)
      }
    }

    return this
  }

  setName(name) {
    if (!name) throw new Error('Name is required')
    if (typeof name !== 'string') throw new Error('Name must be a string')

    this.file = name

    return this
  }
}

export default CustomFile
