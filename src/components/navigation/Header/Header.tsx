import React, { Component } from 'react'
import { View } from 'react-native'

import styles from './styles'
import IconBack from '../IconBack'

export default function renderHeader({ title = '' }: { title?: string }) {
  return {
    headerTitle: title,
    headerBackImage: () => <IconBack />,
    headerBackTitle: ' ',
  }
}
