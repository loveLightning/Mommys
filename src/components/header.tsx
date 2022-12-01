import React, { FC, ReactNode } from 'react'
import { StyleProp, TextStyle, View } from 'react-native'
import _ from 'lodash'
import styled from 'styled-components/native'

import { BackHomeIcon } from 'src/icons'
import { isSmall } from 'src/utils'

interface HeaderProps {
  isBack?: boolean
  colorArrow?: string
  pressOnBack?: () => void
  title?: string
  ComponentsRight?: ReactNode
  titleMargin?: number
  titleMaxWidth?: number
  reduceBack?: boolean
  fontWeight?: 'bold' | 'normal'
  style?: React.CSSProperties | StyleProp<TextStyle>
}

const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.white};
`

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.white};
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.light_grey};
`

const Title = styled.Text`
  width: 100%;
  max-width: 191px;
  text-align: center;
  font-family: ${({ theme }) => theme.roboto700};
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.light_black};
`

const Empty = styled.View`
  width: 40px;
  height: 40px;
`

const BackHomeWrapper = styled.TouchableOpacity`
  margin-left: 10px;
`

export const Header: FC<HeaderProps> = ({
  isBack = false,
  pressOnBack = _.noop,
  title,
  ComponentsRight,
  titleMargin: marginLeft,
  titleMaxWidth = 191,
  ...props
}) => {
  const paddingRight = ComponentsRight ? 16 : 0
  const isDecrease = isSmall ? '50%' : 'auto'

  return (
    <Wrapper>
      <Container style={{ paddingRight }}>
        {isBack ? (
          <BackHomeWrapper onPress={pressOnBack} activeOpacity={0.5}>
            <BackHomeIcon />
          </BackHomeWrapper>
        ) : (
          <Empty />
        )}
        {title && (
          <View
            style={{
              marginLeft,
              width: isDecrease,
            }}>
            <Title
              numberOfLines={1}
              style={{ maxWidth: titleMaxWidth }}
              {...props}>
              {title}
            </Title>
          </View>
        )}
        {ComponentsRight ? <View>{ComponentsRight}</View> : <Empty />}
      </Container>
    </Wrapper>
  )
}
