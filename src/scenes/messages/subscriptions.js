export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
      id
      chatRoomUsers {
        items {
          chatRoomID
          user {
            id
            name
            imageUri
          }
        }
      }
      lastMessage {
        id
        suggestedDate
        suggestedHour
        messageType
        content
        createdAt
        updatedAt
        user {
          id
          name
        }
      }
    }
  }
`;

export const onCreateChatRoom = /* GraphQL */ `
  subscription onCreateChatRoom {
    onCreateChatRoom {
      id
      chatRoomUsers {
        items {
          chatRoomID
          user {
            id
            name
            imageUri
          }
        }
      }
      lastMessage {
        id
        suggestedDate
        suggestedHour
        messageType
        content
        createdAt
        updatedAt
        user {
          id
          name
        }
      }
    }
  }
`;

export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
      chatRoom {
        id
        chatRoomUsers {
          items {
            id
            userID
            chatRoomID
            createdAt
            owner
            user {
              id
              name
              imageUri
            }
          }
          nextToken
        }
        messages {
          items {
            id
            createdAt
            messageType
            content
            suggestedDate
            suggestedHour
            status
            userID
            chatRoomID
            updatedAt
            owner
          }
          nextToken
        }
        lastMessageID
        lastMessage {
          id
          createdAt
          messageType
          content
          suggestedDate
          suggestedHour
          status
          userID
          chatRoomID
          user {
            id
            name
            usertype
            imageUri
            firstName
            lastName
            city
            birthDate
            createdAt
            updatedAt
            owner
          }
          chatRoom {
            id
            lastMessageID
            createdAt
            updatedAt
            owner
          }
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
    }
  }
`;