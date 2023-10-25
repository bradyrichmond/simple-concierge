/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
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
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        logoId
        locations {
          nextToken
          startedAt
        }
        users
        customLabels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizations = /* GraphQL */ `
  query SyncOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        logoId
        locations {
          nextToken
          startedAt
        }
        users
        customLabels {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
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
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        locationName
        checkIns {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        locationName
        checkIns {
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
      nextToken
      startedAt
    }
  }
`;
export const getCheckIn = /* GraphQL */ `
  query GetCheckIn($id: ID!) {
    getCheckIn(id: $id) {
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
export const listCheckIns = /* GraphQL */ `
  query ListCheckIns(
    $filter: ModelCheckInFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCheckIns(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncCheckIns = /* GraphQL */ `
  query SyncCheckIns(
    $filter: ModelCheckInFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCheckIns(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getCustomLabel = /* GraphQL */ `
  query GetCustomLabel($id: ID!) {
    getCustomLabel(id: $id) {
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
export const listCustomLabels = /* GraphQL */ `
  query ListCustomLabels(
    $filter: ModelCustomLabelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomLabels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncCustomLabels = /* GraphQL */ `
  query SyncCustomLabels(
    $filter: ModelCustomLabelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomLabels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
