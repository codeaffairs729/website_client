import React from 'react'
import Select from 'react-select'

const CountryCodeDropdown = ({ value, onChange }) => {
  // Country code options
  const options = [
    { label: '+1', value: '1' },
    { label: '+91', value: '91' },
    // Add more country codes here
  ]

  return (
    <Select
      options={options}
      value={options.find((option) => option.value === value)}
      onChange={(selectedOption) => onChange(selectedOption.value)}
    />
  )
}

export default CountryCodeDropdown
