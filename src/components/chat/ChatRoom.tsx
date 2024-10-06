import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Bubble, GiftedChat, IMessage, Send, Time } from 'react-native-gifted-chat'
import { UserType } from './ChatList'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

declare module 'react-native-gifted-chat' {
  interface IMessage {
    seen?: boolean;
  }
}

const sampleAvatar = 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXJsfGVufDB8fDB8fHww'

interface IChatRoom {
  setPage: (val: string) => void
  user: UserType | undefined
  removeUser: () => void
  clearSelectedCon_id: () => void
  chatId: string | null
  sendMessage: (newMessages: IMessage[]) => void
  updateChatRoom: (data: any) => void
  messages: IMessage[]
  setMessages: (msgs: IMessage[]) => void
}

const ChatRoom = ({
  user,
  chatId,
  updateChatRoom,
  sendMessage,
  setPage,
  removeUser,
  clearSelectedCon_id,
  messages,
  setMessages
}: IChatRoom) => {

  const [lastMessage, setLastMessage] = useState<IMessage[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(true)

  const onSend = useCallback((newMessages: IMessage[] = []) => {

    const pendingMessages = newMessages.map((msg: IMessage) => ({ ...msg, pending: true }))

    sendMessage(pendingMessages)

    console.log(pendingMessages);
    setLastMessage(pendingMessages)
  }, [])

  useEffect(() => {

    //Fetch chatRoom
    fetch('http://10.0.2.2:5034/api/chats/GetMessageList/' + chatId)
      .then((response) => {
        console.log('Start');

        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json();
      })
      .then((data) => {
        console.log('End');

        updateChatRoom(data);
      }).
      catch(error => {
        setIsError(true);
        console.log('ChatList fetch error : ', error);
      })
      .finally(() => {
        setIsLoading(false)
      })

    return () => { removeUser(); clearSelectedCon_id() }
  }, [])

  function renderBubble(props: any) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#cbb55f',
            borderRadius : 7,
            // borderTopEndRadius: 7,
            // borderTopLeftRadius: 7,
            // borderBottomLeftRadius: 7,
            borderBottomEndRadius: 0,
          },
          left: {
            borderWidth: 1,
            borderColor: '#cbb55f',
            backgroundColor: '#fff',
            borderRadius : 7,
            borderTopLeftRadius: 0,
          }
        }}
        textStyle={{
          right: {
            color: '#000'
          },
          left: {
            // color: '#fff'
          }
        }}
        tickStyle={{
          ...(props.currentMessage.seen ? { color: '#34B7F1' } : {})
          // color: props.currentMessage.seen ? '#34B7F1' : 'defaultColor'
        }}

      />
    );
  }

  const renderTime = (props: any) => {
    return (
      <Time
        {...props}
        timeTextStyle={{
          left: {
            // color: 'black',
          },
          right: {
            color: 'white',
          },
        }}
      />
    );
  };

  function renderSend(props: any) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <MaterialCommunityIcon name='send-circle' size={32} color='#6646ee' />
        </View>
      </Send>
    );
  }

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        {/* <IconButton icon='chevron-double-down' size={36} color='#6646ee' /> */}
      </View>
    );
  }

  function renderLoading() {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#6646ee' />
      </View>
    );
  }

  return (
    <>
      <TouchableOpacity onPress={() => setPage('list')}>
        <Text style={{ color: '#000', fontSize: 16 }}>--back</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => isSent()}>
        <Text style={{ color: '#000', fontSize: 16 }}>   sent   </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => isDelivered()}>
        <Text style={{ color: '#000', fontSize: 16 }}>   Delivered   </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => isRead()}>
        <Text style={{ color: '#000', fontSize: 16 }}>   read   </Text>
      </TouchableOpacity> */}



      <GiftedChat
        messages={messages}
        scrollToBottom
        user={{
          _id: 'e74b1dd8-5a1e-4b06-9490-526bc851aa84',
          name: 'gopi2 gopi2',
          avatar: sampleAvatar
        }}
        // showUserAvatar
        showAvatarForEveryMessage={true}
        renderAvatar={() => null}
        // alwaysShowSend
        // renderSend={renderSend}
        textInputProps={{ placeholderTextColor: 'darkgray' }}
        // textInputStyle={{ color: 'black', backgroundColor: 'white' }}
        onSend={messages => onSend(messages)}
        renderBubble={renderBubble}
        renderTime={renderTime}
      // scrollToBottomComponent={scrollToBottomComponent}
      // renderLoading={renderLoading}
      // inverted = {false}
      />
    </>
  )
}

export default ChatRoom;

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomComponentContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

})