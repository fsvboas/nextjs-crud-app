import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { states } from '../utils/states'
import { Row, SearchInput, SelectInput } from './core'

export const FiltersSection = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleFilter = (field: string, value: any) => {
    const searchParam = new URLSearchParams(searchParams)
    if (value?.trim() === '') {
      searchParam.delete(field)
    } else {
      searchParam.set(field, value)
    }
    router.push(`${pathname}?${searchParam.toString()}`)
  }

  const brazilianStates = states?.map(state => ({
    value: state,
    label: state,
  }))

  const stateOptions = [
    { value: '', label: 'Remover Filtro' },
    ...brazilianStates,
  ]

  return (
    <Row className="space-x-2">
      <SearchInput
        placeholder="Name"
        onChange={event => handleFilter('name', event.target.value)}
        defaultValue={searchParams.get('name') || ''}
      />
      <SearchInput
        placeholder="Date of birth"
        onChange={event => handleFilter('birthdate', event.target.value)}
        defaultValue={searchParams.get('birthdate') || ''}
      />
      <SearchInput
        placeholder="Phone"
        onChange={event => handleFilter('phone', event.target.value)}
        defaultValue={searchParams.get('phone') || ''}
      />
      <SearchInput
        placeholder="City"
        onChange={event => handleFilter('city', event.target.value)}
        defaultValue={searchParams.get('city') || ''}
      />
      <SelectInput
        placeholder="State"
        onChange={value => handleFilter('state', value)}
        defaultValue={searchParams.get('state') || ''}
        options={stateOptions}
      />
    </Row>
  )
}
