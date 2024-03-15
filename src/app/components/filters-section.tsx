import Row from './core/row'
import SearchInput from './core/search-input'

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
      <SearchInput placeholder="Name" onChange={setFilters?.setSearchByName} />
      <SearchInput
        placeholder="Date of birth"
        onChange={setFilters?.setSearchByDateOfBirth}
      />
      <SearchInput
        placeholder="Phone"
        onChange={setFilters?.setSearchByPhone}
      />
      <SearchInput placeholder="City" onChange={setFilters?.setSearchByCity} />
      <SearchInput
        placeholder="State"
        onChange={setFilters?.setSearchByState}
      />
    </Row>
  )
}

export default FiltersSection
