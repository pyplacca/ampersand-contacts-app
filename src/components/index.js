import { Text } from 'react-native';
import { colors } from '../config';
// custom components
import LinkButton from './LinkButton';
import InputGroup from './InputGroup';
import Button from './Button';
import ProfileCard from './ProfileCard';
import ProfileDetails from './Details';

function ErrorLabel (props) {
	return (
		<Text
			style={{
				color: colors.primary,
				marginBottom: 20
			}}
		>
			{props.children}
		</Text>
	)
};


export {
	LinkButton,
	InputGroup,
	Button,
	ProfileCard,
	ProfileDetails,
	ErrorLabel
}
