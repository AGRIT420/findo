export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
        content
        createdAt
        updatedAt
        messageType
        suggestedDate
        suggestedHour
        user {
          id
          name
        }
      }
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
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
`;

export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
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