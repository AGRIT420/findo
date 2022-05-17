export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      favoritePets {
        items {
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
        pet {
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
      nextToken
    }
  }
`;