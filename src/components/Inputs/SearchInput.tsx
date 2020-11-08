import React from 'react'
import { SearchInputContainer, Input, SearchIcon } from './styles'

const SearchInput: React.FC = () => {
  return (
    <SearchInputContainer>
      <SearchIcon />
      <Input placeholder="Pesquisa" />
    </SearchInputContainer>
  )
}

export default SearchInput
