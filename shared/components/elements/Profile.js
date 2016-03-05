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
        <Image source={require('../../images/padalese_logo.jpg')} />
      </View>
    )
  }
}

const styles = {
  container: {
    margin: 20
  }
}
