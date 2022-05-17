/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      usertype
      imageUri
      firstName
      lastName
      city
      birthDate
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      favoritePets {
        items {
          id
          userID
          petID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      usertype
      imageUri
      firstName
      lastName
      city
      birthDate
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      favoritePets {
        items {
          id
          userID
          petID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      usertype
      imageUri
      firstName
      lastName
      city
      birthDate
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      favoritePets {
        items {
          id
          userID
          petID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser($owner: String) {
    onCreateChatRoomUser(owner: $owner) {
      id
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser($owner: String) {
    onUpdateChatRoomUser(owner: $owner) {
      id
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser($owner: String) {
    onDeleteChatRoomUser(owner: $owner) {
      id
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($owner: String) {
    onCreateChatRoom(owner: $owner) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($owner: String) {
    onUpdateChatRoom(owner: $owner) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($owner: String) {
    onDeleteChatRoom(owner: $owner) {
      id
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($owner: String) {
    onCreateMessage(owner: $owner) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($owner: String) {
    onUpdateMessage(owner: $owner) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($owner: String) {
    onDeleteMessage(owner: $owner) {
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
export const onCreateFavoritePet = /* GraphQL */ `
  subscription OnCreateFavoritePet($owner: String) {
    onCreateFavoritePet(owner: $owner) {
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
export const onUpdateFavoritePet = /* GraphQL */ `
  subscription OnUpdateFavoritePet($owner: String) {
    onUpdateFavoritePet(owner: $owner) {
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
export const onDeleteFavoritePet = /* GraphQL */ `
  subscription OnDeleteFavoritePet($owner: String) {
    onDeleteFavoritePet(owner: $owner) {
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
export const onCreateShelter = /* GraphQL */ `
  subscription OnCreateShelter($owner: String) {
    onCreateShelter(owner: $owner) {
      id
      name
      location
      imageUri
      userID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateShelter = /* GraphQL */ `
  subscription OnUpdateShelter($owner: String) {
    onUpdateShelter(owner: $owner) {
      id
      name
      location
      imageUri
      userID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteShelter = /* GraphQL */ `
  subscription OnDeleteShelter($owner: String) {
    onDeleteShelter(owner: $owner) {
      id
      name
      location
      imageUri
      userID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePet = /* GraphQL */ `
  subscription OnCreatePet($owner: String) {
    onCreatePet(owner: $owner) {
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
        createdAt
        updatedAt
        owner
      }
      favoritePet {
        items {
          id
          userID
          petID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePet = /* GraphQL */ `
  subscription OnUpdatePet($owner: String) {
    onUpdatePet(owner: $owner) {
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
        createdAt
        updatedAt
        owner
      }
      favoritePet {
        items {
          id
          userID
          petID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePet = /* GraphQL */ `
  subscription OnDeletePet($owner: String) {
    onDeletePet(owner: $owner) {
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
        createdAt
        updatedAt
        owner
      }
      favoritePet {
        items {
          id
          userID
          petID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
