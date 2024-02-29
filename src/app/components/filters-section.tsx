import Button from './core/button'
import Row from './core/row'
import TextInput from './core/text-input'

const FiltersSection = () => {
  return (
    <Row className="space-x-2">
      <TextInput placeholder="Name" />
      <TextInput placeholder="Date of birth" />
      <TextInput placeholder="Phone" />
      <TextInput placeholder="City" />
      <TextInput placeholder="State" />
      <Button type="secondary-light">Filter</Button>
    </Row>
  )
}

export default FiltersSection
