import Button from './core/button'
import Row from './core/row'
import TextInput from './core/text-input'

const FiltersSection = () => {
  return (
    <Row className="space-x-2">
      <TextInput crossOrigin placeholder="Nome" />
      <TextInput crossOrigin placeholder="Data de nascimento" />
      <TextInput crossOrigin placeholder="Telefone" />
      <TextInput crossOrigin placeholder="Cidade" />
      <TextInput crossOrigin placeholder="Estado" />
      <Button type="secondary-light">Filtrar</Button>
    </Row>
  )
}

export default FiltersSection
