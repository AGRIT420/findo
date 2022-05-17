export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      chatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          owner
          chatRoom {
              id
              chatRoomUsers {
                  items {
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
                user {
                  id
                  name
                }
              }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;