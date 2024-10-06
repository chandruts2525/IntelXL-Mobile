import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { HubConnection, HubConnectionBuilder, LogLevel } from '@aspnet/signalr'
import { Image } from 'react-native-elements'
import { AuthContext } from '../context/AuthContext'
import ChatRoom from './ChatRoom'

declare module 'react-native-gifted-chat' {
    interface IMessage {
        seen?: boolean;
    }
}

const sampleAvatar = 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXJsfGVufDB8fDB8fHww'

export type UserType = {
    _id: string,
    name: string,
    avatar: string
}
type ChatListType = {
    conversationId: string,
    message: string,
    sentAt: Date | number,
    user: UserType
}

const ChatList = () => {

    const authData = {
        _id: 'e74b1dd8-5a1e-4b06-9490-526bc851aa84',
        name: 'gopi2 gopi2',
        avatar: sampleAvatar
    };

    const [messages, setMessages] = useState<IMessage[]>([])
    const [hubConnection, setHubConnection] = useState<HubConnection | null>(null)
    const [page, setPage] = useState<string>('list')
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(true)
    const [chatList, setChatList] = useState<ChatListType[]>([])
    const [selectedCon_id, setSelectedCon_id] = useState<string | null>(null)
    const [chatRoomUser, setChatRoomUser] = useState<UserType | undefined>()

    const hub_endpoint = 'http://10.0.2.2:5035/chatHub';
    // const hub_endpoint = 'http://10.0.2.2:5034/chatHub';
    // const hub_endpoint = 'https://agapeworkstech.bsite.net/chatHub';

    const connection = new HubConnectionBuilder()
        .withUrl(hub_endpoint)
        // .withAutomaticReconnect()
        .configureLogging(LogLevel.Debug)
        .build();

    const sendMessageToUser = useCallback((newMessages: IMessage[]) => {
        console.log('Entered');
        // console.log('Hub connection : ', hubConnection);
        // console.log('Connection : ', connection);

        // if (!hubConnection || hubConnection.state !== HubConnectionState.Connected) {
        //     console.error('SignalR connection is not initialized or not in the Connected state.');
        //     return;
        // }

        console.log('Message to append : ', newMessages);

        setMessages(prevMessages => {
            return GiftedChat.append(prevMessages, newMessages)
        })

        newMessages.map((msg: IMessage) => {
            updateListOnSent(msg)
            const jsonString = encodeURIComponent(JSON.stringify({
                message: msg.text,
                toId: 'f592d238-638e-42c4-8b8d-24176a3223c5',
                conversationId: 'e8ba8067-906d-43e6-b5ae-29dd9d1741dd',
                messageId: msg._id,
                fromId: 'e74b1dd8-5a1e-4b06-9490-526bc851aa84'
            }));

            hubConnection?.invoke("SendToUser", jsonString)
                .then(() => {
                    // update messae as sent
                    setMessages(prevMessges => {
                        const sentMessages = prevMessges?.map((sentMsg) => {
                            if (msg._id == sentMsg._id && !msg.received)
                                return ({ ...sentMsg, sent: true, pending: false })
                            return sentMsg;
                        })
                        return sentMessages
                    })
                    console.log("Message sent to user successfully.");
                }).catch((err) => {
                    console.error("Error sending message to user:", err);
                });
        })
    }, [hubConnection, messages, chatRoomUser, selectedCon_id])

    const updateListOnReceived = useCallback(async (newItem: any) => {
        setChatList((prevLists) => {
            const newListItem = modifyChatListSingle(newItem)
            return [newListItem, ...prevLists.filter((listItem) => listItem.conversationId !== newListItem.conversationId)]
        })
    }, [chatList])

    const updateListOnSent = useCallback((item: IMessage) => {
        setChatList((prevLists) => {

            const newListItem: ChatListType = {
                conversationId: selectedCon_id || '',
                message: item.text,
                sentAt: item.createdAt,
                user: {
                    _id: chatRoomUser?._id || '',
                    avatar: chatRoomUser?.avatar || '',
                    name: chatRoomUser?.name || '',
                },
            }

            return [newListItem, ...prevLists.filter((listItem) => listItem.conversationId !== newListItem.conversationId)]
        })
    }, [chatList, chatRoomUser, selectedCon_id])

    const handleMessageReceived = useCallback((data: any) => {

        console.log(data.conversationId == selectedCon_id);
        updateListOnReceived(data)

        if (data.conversationId === selectedCon_id) {
            setMessages((prevMessages) => {
                return GiftedChat.append(prevMessages, modifyChatRoomMessages([data]))
            })
        }
    }, [selectedCon_id])


    const handleMessageDelivered = useCallback((toId: string, messageId: string) => {

        // console.log(data.conversationId == selectedCon_id);
        // updateListOnDelivered(data)

        // if (data.conversationId === selectedCon_id) {
        setMessages(prevMessges => {
            const sentMessages = prevMessges?.map((deliveredMsg) => {
                if (messageId == deliveredMsg._id)
                    return ({ ...deliveredMsg, received: true, pending: false })
                return deliveredMsg;
            })
            console.log("Message delivered to user successfully.");
            return sentMessages
        })
        // }
    }, [selectedCon_id])

    useEffect(() => {
        console.log('UseEffect called and selected con : ', selectedCon_id);
        hubConnection?.off("ReceiveMessage");
        hubConnection?.on("ReceiveMessage", handleMessageReceived);
    }, [selectedCon_id, hubConnection])

    useEffect(() => {

        setHubConnection(() => connection);


        connection.on("Connected", (data: any) => {
            console.log(data);
        })

        connection.on("MessageRead", (data: any) => {
            console.log(data);
        })

        connection.on("MessageDelivered", (toId: string, messageId: string) => {
            console.log('data1 : ', toId);
            console.log('data2 : ', messageId);
            handleMessageDelivered(toId, messageId)
        })

        connection.on("Disconnected", (data: any) => {
            console.log("SignalR Disconnected");
        })

        connection.start().then(() => {
            console.log('SignalR Started!');
        }).catch((err: any) => console.log(err));

        //Fetch chat list
        fetch('http://10.0.2.2:5034/api/chats/GetChatListById/1')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json();
            })
            .then((data) => {
                setChatList(modifyChatList(data));
            }).
            catch(error => {
                setIsError(true);
                console.log('ChatList fetch error : ', error);
            })
            .finally(() => {
                setIsLoading(false)
            })

        return () => {
            connection.stop().then(() => {
                console.log('SignalR Disconnected!');
            }).catch((error) => {
                console.error('SignalR Disconnection Error:', error);
            });
        }
    }, [])

    const onChatRoom = (conversationId: string, user: UserType) => {
        console.log('Con Id : ', conversationId);

        setSelectedCon_id(conversationId)
        setChatRoomUser(user)
        setPage('chatRoom')
    }

    const modifyChatListSingle = (msg: any): ChatListType => {

        const { id, firstName, lastName, profileUrl } = msg.fromUser;

        return {
            conversationId: msg.conversationId,
            message: msg.message,
            sentAt: msg.sentAt,
            user: {
                _id: id,
                avatar: profileUrl,
                name: firstName + ' ' + lastName,
            }
        };
    }

    const modifyChatList = (data: any[]): ChatListType[] => {
        return data
            ? data.map((msg: any): ChatListType => {

                const { id, firstName, lastName, profileUrl } = (msg.chat.toUser?.id === authData._id) ? msg.chat.fromUser : msg.chat.toUser;

                return {
                    conversationId: msg.chat.conversationId,
                    message: msg.chat.message,
                    sentAt: msg.chat.sentAt,
                    user: {
                        _id: id,
                        avatar: profileUrl,
                        name: firstName + ' ' + lastName,
                    }
                };
            })
            : [];
    }

    const modifyChatRoomMessages = (data: any[]): IMessage[] => {

        return data
            ? data.reverse().map((msg: any): IMessage => {

                return {
                    _id: msg?.chatId,
                    text: msg.message,
                    createdAt: msg.sentAt,
                    user: {
                        _id: msg.fromId,
                        // avatar: profileUrl,
                        // name: firstName + ' ' + lastName,
                    },
                    // image: sampleAvatar,
                    // video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                    sent: true,
                    received: msg.isDelivered,
                    pending: false,
                    seen: msg.isRead
                };
            })
            : [];
    }

    return (
        <>
            {(page == 'list') ? (
                <View>
                    <FlatList
                        data={chatList}
                        keyExtractor={item => item.conversationId}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity style={styles.listContainer} onPress={() => onChatRoom(item.conversationId, item.user)}>
                                    <View style={styles.listAvatarContainer}>
                                        <Image style={styles.listAvatar} source={{ uri: item.user.avatar }} />
                                    </View>
                                    <View style={styles.listTextContainer}>
                                        <Text style={styles.listUserName}>{item.user.name}</Text>
                                        <Text style={styles.listMessage}>{item.message}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            ) : (
                <ChatRoom
                    user={chatRoomUser}
                    chatId={selectedCon_id}
                    messages={messages}
                    setMessages={(msgs: IMessage[]) => setMessages(msgs)}
                    setPage={(val: string) => setPage(val)}
                    removeUser={() => setChatRoomUser(undefined)}
                    clearSelectedCon_id={() => setSelectedCon_id(null)}
                    sendMessage={(newMessages: IMessage[]) => sendMessageToUser(newMessages)}
                    updateChatRoom={(data: any) => setMessages(modifyChatRoomMessages(data))}
                />
            )}
        </>
    )
}

export default ChatList

const styles = StyleSheet.create({
    listUserName: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    listAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 8,
        marginHorizontal: 8
    },
    listAvatarContainer: {
        width: 50,
        marginRight: 16
    },
    listTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    listMessage: {
        color: '#000',
        marginTop: 3
    }
})