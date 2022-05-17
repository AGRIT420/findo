export const onCreateFavoritePet = /* GraphQL */ `
  subscription OnCreateFavoritePet {
    onCreateFavoritePet {
      pet {
        id
        name
        imageUri
        birthDate
        breed
        description
        healthCondition
        inShelterSinceDate
        shelter {
          id
          name
          location
          user {
            id
            name
          }
        }
      }
    }
  }
`;
export const onDeleteFavoritePet = /* GraphQL */ `
  subscription OnDeleteFavoritePet {
    onDeleteFavoritePet {
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