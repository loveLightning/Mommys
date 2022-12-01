import React from 'react'
import {
  Linking,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native'
import styled from 'styled-components/native'

import {
  ArrowIcon,
  FacebookIcon,
  InstagramIcon,
  InternetIcon,
  MailIcon,
} from 'src/icons'
import { generalEmail, linkFacebook, linkInstagram, webSite } from 'src/utils'

import { Button } from '../button'
import { Separator } from '../separator'
import { legalData, linksData, personalData } from './types'

export const ProfileData = () => {
  const openMail = async (email: string) => {
    await Linking.openURL(`mailto:${email}`)
  }

  const openWebSite = async (link: string) => {
    await Linking.openURL(link)
  }

  const openLink = (id: number) => {
    id === 0 ? openMail(generalEmail) : openWebSite(webSite)
  }

  return (
    <WrapperAreaView>
      <ScrollView>
        <GeneralText>Общее</GeneralText>
        {personalData?.map((el) => (
          <TouchableNativeFeedback key={el.id}>
            <Wrapper>
              <TextPersonalData>{el.title}</TextPersonalData>
              {el.arrow && <ArrowIcon />}
            </Wrapper>
          </TouchableNativeFeedback>
        ))}

        <Separator />
        <GeneralText>Написать нам</GeneralText>
        {linksData?.map((el, id) => (
          <TouchableNativeFeedback key={el.id} onPress={() => openLink(id)}>
            <Wrap>
              <WrapperLinks>
                {el.id === 0 ? <MailIcon /> : <InternetIcon />}
                <TextLink>{el.title}</TextLink>
              </WrapperLinks>
              <ArrowIcon />
            </Wrap>
          </TouchableNativeFeedback>
        ))}

        <Separator />

        <WrapperLetter>
          <GeneralText>Мы в соцсетях</GeneralText>
          <WrapperImages>
            <WrapperImage onPress={() => openWebSite(linkFacebook)}>
              <FacebookIcon />
            </WrapperImage>
            <WrapperImage onPress={() => openWebSite(linkInstagram)}>
              <InstagramIcon />
            </WrapperImage>
          </WrapperImages>
        </WrapperLetter>

        <Separator />

        <GeneralText>Юридическая информация</GeneralText>
        {legalData?.map((el) => (
          <TouchableNativeFeedback key={el.id}>
            <Wrapper>
              <TextLegalData>{el.title}</TextLegalData>
              <ArrowIcon />
            </Wrapper>
          </TouchableNativeFeedback>
        ))}

        <Separator />
        <Container>
          <Button title={'ВЫХОД'} style={styledButton.buttonIndent} />
        </Container>
      </ScrollView>
    </WrapperAreaView>
  )
}
const styledButton = StyleSheet.create({
  buttonIndent: {
    marginTop: 40,
    marginBottom: 40,
  },
})

const WrapperAreaView = styled.SafeAreaView`
  height: 100%;
  background-color: ${({ theme }) => theme.white};
`

const Container = styled.View`
  padding: 0px 16px;
`

const WrapperLetter = styled.View`
  margin-bottom: 20px;
`

const GeneralText = styled.Text`
  margin-top: 20px;
  color: ${({ theme }) => theme.extra_light_grey};
  font-size: 16px;
  padding: 0px 16px;
  margin-bottom: 5px;
`

const Wrapper = styled.View`
  padding: 15px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const WrapperLinks = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`

const TextPersonalData = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.light_black};
`

const TextLink = styled.Text`
  color: ${({ theme }) => theme.purple};
  font-size: 16px;
  margin-left: 16px;
`

const WrapperImages = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`

const WrapperImage = styled.TouchableOpacity`
  margin-top: 25px;
  background-color: ${({ theme }) => theme.light_purple};
  margin-right: 30px;
  padding: 10px;
  border-radius: 6px;
`

const TextLegalData = styled(TextPersonalData)``

const Wrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`
