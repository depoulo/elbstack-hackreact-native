import React, {
  Platform,
  Component,
  View,
  ScrollView,
  ListView,
  InteractionManager,
  Switch
} from 'react-native'
import { connect } from 'react-redux/native'

import { listChannels } from '../../actions/channels'

import ActionBar from '../container/ActionBar'
import LoadingIndicator from '../elements/LoadingIndicator'
import Text from '../elements/Text'
import IntroText from '../elements/IntroText'
import ChannelListItem from '../elements/ChannelListItem'


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

  handleChannelPress(id, channel_url) {
    console.log(id);
    console.log(channel_url);
  }

  render() {
    let channelContent = <LoadingIndicator/>

    if (this.state.interactionsFinished && !this.props.channels.list) {
      channelContent = <Text>Lade Channels</Text>
    } else if (this.props.channels.list) {
      const channels = this.props.channels.list;
      console.log(channels);
      channelContent = <ListView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={true}
        dataSource={
          new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          })
          .cloneWithRows(Object.values(channels))
        }
        renderRow={rowData => console.log(rowData) || <ChannelListItem name={rowData.name} onPress={()=>this.handleChannelPress(rowData.id, rowData.channel_url)}/>}
        />
    }

    return (
      <View style={styles.container}>
        <ActionBar title="Available Channels"/>
        {channelContent}
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
