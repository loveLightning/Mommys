import React, { useLayoutEffect } from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Header, ProfileData } from 'src/components'
import { useNavigation } from 'src/navigation'

const headerStyles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
})

export const ProfileScreen = () => {
  const { setOptions } = useNavigation()
  const { black } = useTheme()

  useLayoutEffect(() => {
    setOptions({
      header: ({ navigation }) => (
        <Header
          titleMargin={-170}
          isBack
          title={'Профиль'}
          pressOnBack={navigation.goBack}
          style={headerStyles.headerTitle}
        />
      ),
    })
  }, [black, setOptions])

  return <ProfileData />
}
