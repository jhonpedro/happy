import { StatusBar } from 'react-native'
import React from 'react'

import { useFonts } from 'expo-font'
import {
	Nunito_600SemiBold,
	Nunito_700Bold,
	Nunito_800ExtraBold,
} from '@expo-google-fonts/nunito'
import { Text, View } from 'react-native'

import Routes from './src/routes'

export default function App() {
	const [fontsLoaded] = useFonts({
		Nunito_600SemiBold,
		Nunito_700Bold,
		Nunito_800ExtraBold,
	})

	if (!fontsLoaded) {
		return null
	}

	return (
		<>
			<Routes />
			<StatusBar />
		</>
	)
}
