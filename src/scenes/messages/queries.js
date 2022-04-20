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