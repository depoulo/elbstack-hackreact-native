import React, {
  Platform,
  Component,
  View,
  ScrollView,
  InteractionManager,
  Switch
} from 'react-native'
import { connect } from 'react-redux/native'

import { listChannels } from '../../actions/channels'

import ActionBar from '../container/ActionBar'
import LoadingIndicator from '../elements/LoadingIndicator'
import Text from '../elements/Text'
import IntroText from '../elements/IntroText'

class ChannelsPage extends Component {
  state = {
    interactionsFinished: false
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({interactionsFinished: true})

      this.props.listChannels()
    })
  }

  render() {
    let channelContent = <LoadingIndicator/>

    if (this.state.interactionsFinished && !this.props.channels.list) {
      channelContent = <Text>Lade Channels</Text>
    } else if (this.props.channels.list) {
      const channels = this.props.channels.list;
      channelContent = Object.keys(channels).map(channelId => <Text key={channelId}>{channels[channelId].name}</Text>);
    }

    return (
      <View style={styles.container}>
        <ActionBar title="Available Channels"/>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={true}>
          {channelContent}
        </ScrollView>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f7f8fc'
  }
}


export default connect(
  state => ({
    channels: state.channels
  }),
  (dispatch) => {
    return {
      listChannels: () => dispatch(listChannels())
    }
  }
)(ChannelsPage)
