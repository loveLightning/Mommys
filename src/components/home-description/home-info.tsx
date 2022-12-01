import React from 'react'
import { Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import styled from 'styled-components/native'

import { useNavigation } from 'src/navigation'
import { HomeDescriptionProp } from 'src/navigation/routes'
import { URL } from 'src/utils'

import { Header } from '../header'

export const HomeInfo = () => {
  const { goBack } = useNavigation()
  const {
    params: { content },
  } = useRoute<HomeDescriptionProp>()

  return (
    <>
      <Header pressOnBack={goBack} isBack />
      <Image
        style={{ height: 230, borderRadius: 5 }}
        source={{ uri: URL + '/' + content.image }}
      />
      <Wrapper>
        <Title>{content.title}</Title>
        <Description>{content.content}</Description>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.ScrollView`
  padding: 0 16px;
  background-color: ${({ theme }) => theme.white};
`

const Title = styled.Text`
  margin-top: 20px;
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.light_black};
`

const Description = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.black};
`
