import Button from './core/button'
import Row from './core/row'
import TextInput from './core/text-input'

const FiltersSection = () => {
  return (
    <Row className="space-x-2">
      <TextInput crossOrigin placeholder="Name" />
      <TextInput crossOrigin placeholder="Date of birth" />
      <TextInput crossOrigin placeholder="Phone" />
      <TextInput crossOrigin placeholder="City" />
      <TextInput crossOrigin placeholder="State" />
      <Button type="secondary-light">Filter</Button>
    </Row>
  )
}

export default FiltersSection
