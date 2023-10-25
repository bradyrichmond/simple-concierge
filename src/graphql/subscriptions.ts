/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
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
export const onCreateCheckIn = /* GraphQL */ `
  subscription OnCreateCheckIn($filter: ModelSubscriptionCheckInFilterInput) {
    onCreateCheckIn(filter: $filter) {
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
export const onUpdateCheckIn = /* GraphQL */ `
  subscription OnUpdateCheckIn($filter: ModelSubscriptionCheckInFilterInput) {
    onUpdateCheckIn(filter: $filter) {
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
export const onDeleteCheckIn = /* GraphQL */ `
  subscription OnDeleteCheckIn($filter: ModelSubscriptionCheckInFilterInput) {
    onDeleteCheckIn(filter: $filter) {
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
export const onCreateCustomLabel = /* GraphQL */ `
  subscription OnCreateCustomLabel(
    $filter: ModelSubscriptionCustomLabelFilterInput
  ) {
    onCreateCustomLabel(filter: $filter) {
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
export const onUpdateCustomLabel = /* GraphQL */ `
  subscription OnUpdateCustomLabel(
    $filter: ModelSubscriptionCustomLabelFilterInput
  ) {
    onUpdateCustomLabel(filter: $filter) {
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
export const onDeleteCustomLabel = /* GraphQL */ `
  subscription OnDeleteCustomLabel(
    $filter: ModelSubscriptionCustomLabelFilterInput
  ) {
    onDeleteCustomLabel(filter: $filter) {
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
