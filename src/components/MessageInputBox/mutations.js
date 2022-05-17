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