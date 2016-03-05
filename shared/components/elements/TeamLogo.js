import React, {
  Component,
  Image,
  View
} from 'react-native'

import Text from './Text'

export default class TeamLogo extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../images/padalese_logo.jpg')} />
        <Text>HackReact Team</Text>
      </View>
    )
  }
}

const styles = {
  container: {
    margin: 20
  },
  image: {
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: "white"
  }
}