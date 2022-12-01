import styled from 'styled-components/native'

interface StyledProps {
  customHeight?: number
}

export const Separator = styled.View<StyledProps>`
  width: 100%;
  height: ${({ customHeight }) =>
    !customHeight ? '2px' : customHeight + 'px'};
  background-color: ${({ theme }) => theme.light_grey};
`
