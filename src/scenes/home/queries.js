export const listPets = /* GraphQL */ `
  query ListPets {
    listPets {
        items {
          id
          name
          imageUri
          available
          description
          breed
          birthDate
          inShelterSinceDate
          healthCondition
          shelter {
            id
            name
            location
            user {
              id
              name
              imageUri
            }
          }
          favoritePet {
            items {
              id
              userID
            }
          }
      }
    }
  }
`;

export const getFavoritePetsIDs = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
    favoritePets {
      items {
        id
      }
    }
    id
  }
  }
`;