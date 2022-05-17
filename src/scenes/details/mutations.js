export const createFavoritePet = /* GraphQL */ `
  mutation CreateFavoritePet(
    $input: CreateFavoritePetInput!
    $condition: ModelFavoritePetConditionInput
  ) {
    createFavoritePet(input: $input, condition: $condition) {
      id
      userID
      petID
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
      pet {
        id
        name
        imageUri
        available
        description
        breed
        healthCondition
        birthDate
        inShelterSinceDate
        shelterID
        shelter {
          id
          name
          location
          imageUri
          userID
          createdAt
          updatedAt
          owner
          user {
            id
            name
          }
        }
        favoritePet {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFavoritePet = /* GraphQL */ `
  mutation DeleteFavoritePet(
    $input: DeleteFavoritePetInput!
    $condition: ModelFavoritePetConditionInput
  ) {
    deleteFavoritePet(input: $input, condition: $condition) {
      id
      userID
      petID
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
      pet {
        id
        name
        imageUri
        available
        description
        breed
        healthCondition
        birthDate
        inShelterSinceDate
        shelterID
        shelter {
          id
          name
          location
          imageUri
          userID
          createdAt
          updatedAt
          owner
          user {
            id
            name
          }
        }
        favoritePet {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
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