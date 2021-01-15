import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { colors } from '../config';


export default function InputGroup ({label, input, type}) {
	const [inputValue, setInputValue] = useState('');
	return (
		<View
			style={{
				paddingVertical: 7,
				borderBottomWidth: 1,
				borderBottomColor: '#ebebeb',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center'
			}}
		>
			<Text
				style={{
					// fontWeight: 'bold'
				}}
			>
				{label}
			</Text>
			<TextInput
				textAlign='right'
				textContentType={type}
				placeholder={label}
				placeholderTextColor={colors.textGrey}
				value={inputValue}
				onChangeText={setInputValue}
				secureTextEntry={type.includes('password')}
				selectTextOnFocus
			/>
		</View>
	)
};