/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
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
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getFavoritePet = /* GraphQL */ `
  query GetFavoritePet($id: ID!) {
    getFavoritePet(id: $id) {
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
export const listFavoritePets = /* GraphQL */ `
  query ListFavoritePets(
    $filter: ModelFavoritePetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavoritePets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getShelter = /* GraphQL */ `
  query GetShelter($id: ID!) {
    getShelter(id: $id) {
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
export const listShelters = /* GraphQL */ `
  query ListShelters(
    $filter: ModelShelterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShelters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPet = /* GraphQL */ `
  query GetPet($id: ID!) {
    getPet(id: $id) {
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
export const listPets = /* GraphQL */ `
  query ListPets(
    $filter: ModelPetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
      nextToken
    }
  }
`;
