import React from 'react'
import { Image, TouchableNativeFeedback, View } from 'react-native'
import styled from 'styled-components/native'

import { Screens, useNavigation } from 'src/navigation'
import { URL } from 'src/utils'

interface Props {
  item: {
    content: string
    title: string
    image: string
  }
}

export const HomePageCard = ({ item }: Props) => {
  const { navigate } = useNavigation()

  const navigateScreen = () => {
    navigate(Screens.HomeDescription, {
      content: item,
    })
  }

  return (
    <TouchableNativeFeedback
      onPress={navigateScreen}
      background={TouchableNativeFeedback.SelectableBackground()}>
      <View>
        <Image
          style={{ height: 180, borderRadius: 5 }}
          source={{ uri: URL + '/' + item.image }}
        />
        <ItemText>
          {item.title.length > 70
            ? item.title.split('').splice(0, 70).join('') + '...'
            : item.title}
        </ItemText>
      </View>
    </TouchableNativeFeedback>
  )
}

const ItemText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${({ theme }) => theme.light_black};
  margin-top: 16px;
  margin-bottom: 16px;
`
