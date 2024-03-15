import Row from './core/row'
import TextInput from './core/text-input'

interface FiltersSectionProps {
  setFilters: {
    setSearchByName: React.Dispatch<React.SetStateAction<string>>
    setSearchByDateOfBirth: React.Dispatch<React.SetStateAction<string>>
    setSearchByPhone: React.Dispatch<React.SetStateAction<string>>
    setSearchByCity: React.Dispatch<React.SetStateAction<string>>
    setSearchByState: React.Dispatch<React.SetStateAction<string>>
  }
}

const FiltersSection = ({ setFilters }: FiltersSectionProps) => {
  return (
    <Row className="space-x-2">
      <TextInput placeholder="Name" onChange={setFilters?.setSearchByName} />
      <TextInput
        placeholder="Date of birth"
        onChange={setFilters?.setSearchByDateOfBirth}
      />
      <TextInput placeholder="Phone" onChange={setFilters?.setSearchByPhone} />
      <TextInput placeholder="City" onChange={setFilters?.setSearchByCity} />
      <TextInput placeholder="State" onChange={setFilters?.setSearchByState} />
    </Row>
  )
}

export default FiltersSection
