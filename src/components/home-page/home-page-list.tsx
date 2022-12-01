import React, { useCallback, useState } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

import { HomePageCard } from './home-page-card'
import { NewsTypes } from './types'

interface Props {
  data: NewsTypes[] | undefined
  getMovies: () => void
}

export const HomePageList: React.FC<Props> = ({ data, getMovies }) => {
  const [refreshing, setRefreshing] = useState(false)

  const refresh = useCallback(async () => {
    setRefreshing(true)
    getMovies()
    setRefreshing(false)
  }, [getMovies])

  const onEnd = () => {
    return
  }

  return (
    <>
      <SafeAreaView>
        <Container>
          <FlatList
            ListHeaderComponent={<NewsText>Новости</NewsText>}
            ListFooterComponent={<Footer />}
            data={data}
            renderItem={({ item }) => <HomePageCard item={item} />}
            keyExtractor={(_, id) => id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={onEnd}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={refresh}
                tintColor="#fff"
                titleColor="#fff"
              />
            }
          />
        </Container>
      </SafeAreaView>
    </>
  )
}

const Container = styled.View`
  padding: 0 16px;
  height: 100%;
  background: ${({ theme }) => theme.white};
`

const NewsText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: ${({ theme }) => theme.light_black};
  margin-top: 30px;
  margin-bottom: 10px;
`
const Footer = styled.View`
  margin-bottom: 30px;
`
