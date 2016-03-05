import React, {
  Component,
  Image,
  View
} from 'react-native'

import Text from './Text'

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.username}</Text>
        <Image style={styles.resizeMode} source={require('../../images/padalese_logo.jpg')} />
      </View>
    )
  }
}

const styles = {
  container: {
    margin: 20
  },
  resizeMode: {
    width: 200,
    height: 200,
    borderWidth: 0.5,
    borderColor: 'white'
  },
}
