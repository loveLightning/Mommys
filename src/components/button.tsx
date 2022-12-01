import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import { RemoveAccessibility } from 'src/types'

import { Loader } from './loader'

interface Props extends RemoveAccessibility<TouchableOpacityProps> {
  title?: string
  loading?: boolean
}

const Wrapper = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-style: solid;
  border-radius: 5px;
  padding: 12.5px 24px;
  background-color: ${({ theme }) => theme.pink};
  border: none;
  border-color: ${({ theme }) => theme.pink};
`

const Title = styled.Text`
  color: ${({ theme }) => theme.black};
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
`

const LoaderWrapper = styled.View`
  height: 19px;
`

export const Button = ({ title, loading, children, ...rest }: Props) => {
  const { white } = useTheme()

  return (
    <Wrapper {...rest}>
      {children ?? <Title>{title}</Title>}

      {loading && (
        <LoaderWrapper>
          <Loader size="small" color={white} />
        </LoaderWrapper>
      )}
    </Wrapper>
  )
}
