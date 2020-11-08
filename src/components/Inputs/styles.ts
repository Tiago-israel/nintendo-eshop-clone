import styled, { css } from 'styled-components'
import { FaSearch } from 'react-icons/fa'

const commonStyle = css`
  padding: 4px 25px 5px 10px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(102, 175, 233, 0.6);
  }
`

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`

export const Input = styled.input`
  ${commonStyle};
  height: 34px;
  width: 400px;
  padding: 0 40px 0 12px;
`

export const Select = styled.select`
  ${commonStyle}
`

export const SearchInputContainer = styled.div`
  position: relative;
`
