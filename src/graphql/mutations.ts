/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      name
      logoId
      locations {
        items {
          id
          locationName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organizationLocationsId
        }
        nextToken
        startedAt
      }
      users
      customLabels {
        items {
          id
          name
          value
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organizationCustomLabelsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      name
      logoId
      locations {
        items {
          id
          locationName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organizationLocationsId
        }
        nextToken
        startedAt
      }
      users
      customLabels {
        items {
          id
          name
          value
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organizationCustomLabelsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      name
      logoId
      locations {
        items {
          id
          locationName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organizationLocationsId
        }
        nextToken
        startedAt
      }
      users
      customLabels {
        items {
          id
          name
          value
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organizationCustomLabelsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      locationName
      checkIns {
        items {
          id
          firstName
          lastName
          phone
          complete
          showError
          errorPrompt
          timerCleared
          createdTime
          hasReservation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          locationCheckInsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationLocationsId
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      locationName
      checkIns {
        items {
          id
          firstName
          lastName
          phone
          complete
          showError
          errorPrompt
          timerCleared
          createdTime
          hasReservation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          locationCheckInsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationLocationsId
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      locationName
      checkIns {
        items {
          id
          firstName
          lastName
          phone
          complete
          showError
          errorPrompt
          timerCleared
          createdTime
          hasReservation
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          locationCheckInsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationLocationsId
    }
  }
`;
export const createCheckIn = /* GraphQL */ `
  mutation CreateCheckIn(
    $input: CreateCheckInInput!
    $condition: ModelCheckInConditionInput
  ) {
    createCheckIn(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phone
      complete
      showError
      errorPrompt
      timerCleared
      createdTime
      hasReservation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationCheckInsId
    }
  }
`;
export const updateCheckIn = /* GraphQL */ `
  mutation UpdateCheckIn(
    $input: UpdateCheckInInput!
    $condition: ModelCheckInConditionInput
  ) {
    updateCheckIn(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phone
      complete
      showError
      errorPrompt
      timerCleared
      createdTime
      hasReservation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationCheckInsId
    }
  }
`;
export const deleteCheckIn = /* GraphQL */ `
  mutation DeleteCheckIn(
    $input: DeleteCheckInInput!
    $condition: ModelCheckInConditionInput
  ) {
    deleteCheckIn(input: $input, condition: $condition) {
      id
      firstName
      lastName
      phone
      complete
      showError
      errorPrompt
      timerCleared
      createdTime
      hasReservation
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationCheckInsId
    }
  }
`;
export const createCustomLabel = /* GraphQL */ `
  mutation CreateCustomLabel(
    $input: CreateCustomLabelInput!
    $condition: ModelCustomLabelConditionInput
  ) {
    createCustomLabel(input: $input, condition: $condition) {
      id
      name
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationCustomLabelsId
    }
  }
`;
export const updateCustomLabel = /* GraphQL */ `
  mutation UpdateCustomLabel(
    $input: UpdateCustomLabelInput!
    $condition: ModelCustomLabelConditionInput
  ) {
    updateCustomLabel(input: $input, condition: $condition) {
      id
      name
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationCustomLabelsId
    }
  }
`;
export const deleteCustomLabel = /* GraphQL */ `
  mutation DeleteCustomLabel(
    $input: DeleteCustomLabelInput!
    $condition: ModelCustomLabelConditionInput
  ) {
    deleteCustomLabel(input: $input, condition: $condition) {
      id
      name
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationCustomLabelsId
    }
  }
`;
