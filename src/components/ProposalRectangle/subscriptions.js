export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
        chatRoomUser {
          nextToken
        }
        favoritePets {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      chatRoom {
        id
        chatRoomUsers {
          nextToken
        }
        messages {
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
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      updatedAt
      owner
    }
  }
`;