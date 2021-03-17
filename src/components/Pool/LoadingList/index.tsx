import React from 'react'
import styled from 'styled-components'
import LoadingCard from './LoadingCard'

const ListLayout = styled.div<{ wide: boolean }>`
  display: grid;
  grid-gap: 9px;
  grid-template-columns: ${props => (props.wide ? 'auto auto auto' : 'auto auto auto auto')};
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: auto;
  `};
`

interface LoadingListProps {
  wideCards?: boolean
  doubleCircle?: boolean
  itemsAmount?: number
}

export default function LoadingList({ wideCards, doubleCircle, itemsAmount }: LoadingListProps) {
  return (
    <ListLayout wide={!!wideCards}>
      {new Array(itemsAmount || (wideCards ? 9 : 12)).fill(null).map((_, index) => (
        <LoadingCard key={index} doubleCircle={doubleCircle} />
      ))}
    </ListLayout>
  )
}
