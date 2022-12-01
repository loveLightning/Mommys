import React, { useEffect, useLayoutEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { Header, Loader } from 'src/components'
import { HomePageList } from 'src/components/home-page'
import { NewsTypes } from 'src/components/home-page/types'
import { PersonIcon } from 'src/icons'
import { Screens, useNavigation } from 'src/navigation'

export const HomeScreen = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState<NewsTypes[] | undefined>()
  const { setOptions, navigate } = useNavigation()

  const getMovies = async () => {
    try {
      const response = await fetch('http://pqdev.ru/api/v1/news')
      const json = await response.json()
      setData(json)
    } catch {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  useLayoutEffect(() => {
    setOptions({
      header: ({ navigation }) => (
        <Header
          ComponentsRight={
            <TouchableOpacity onPress={() => navigate(Screens.Profile)}>
              <PersonIcon />
            </TouchableOpacity>
          }
          pressOnBack={navigation.goBack}
        />
      ),
    })
  }, [navigate, setOptions])

  if (isLoading) {
    return (
      <WrapperLoader>
        <Loader />
      </WrapperLoader>
    )
  }

  return <HomePageList getMovies={getMovies} data={data} />
}

const WrapperLoader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.white};
`
