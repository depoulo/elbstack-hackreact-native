import React, {
  Component,
  View,
  TouchableHighlight
} from 'react-native'

import Text from '../elements/Text'

export default class ChannelListItem extends Component {

  render() {

    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f7f8fc',
    borderTopWidth: 1,
    borderColor: "#DEDEDE",
    elevation: 10,
    padding: 10,
  },
  text: {
    color: 'black',
    fontSize: 20
  }
};
