/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateOrganizationInput = {
  id?: string | null,
  name: string,
  logoId?: string | null,
  users?: Array< string | null > | null,
  _version?: number | null,
};

export type ModelOrganizationConditionInput = {
  name?: ModelStringInput | null,
  logoId?: ModelStringInput | null,
  users?: ModelStringInput | null,
  and?: Array< ModelOrganizationConditionInput | null > | null,
  or?: Array< ModelOrganizationConditionInput | null > | null,
  not?: ModelOrganizationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Organization = {
  __typename: "Organization",
  id: string,
  name: string,
  logoId?: string | null,
  locations?: ModelLocationConnection | null,
  users?: Array< string | null > | null,
  customLabels?: ModelCustomLabelConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items:  Array<Location | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Location = {
  __typename: "Location",
  id: string,
  locationName: string,
  checkIns?: ModelCheckInConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  organizationLocationsId: string,
};

export type ModelCheckInConnection = {
  __typename: "ModelCheckInConnection",
  items:  Array<CheckIn | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CheckIn = {
  __typename: "CheckIn",
  id: string,
  firstName: string,
  lastName: string,
  phone: string,
  complete: boolean,
  showError?: boolean | null,
  errorPrompt?: string | null,
  timerCleared?: boolean | null,
  createdTime: number,
  hasReservation?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  locationCheckInsId: string,
};

export type ModelCustomLabelConnection = {
  __typename: "ModelCustomLabelConnection",
  items:  Array<CustomLabel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CustomLabel = {
  __typename: "CustomLabel",
  id: string,
  name: string,
  value: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  organizationCustomLabelsId?: string | null,
};

export type UpdateOrganizationInput = {
  id: string,
  name?: string | null,
  logoId?: string | null,
  users?: Array< string | null > | null,
  _version?: number | null,
};

export type DeleteOrganizationInput = {
  id: string,
  _version?: number | null,
};

export type CreateLocationInput = {
  id?: string | null,
  locationName: string,
  _version?: number | null,
  organizationLocationsId: string,
};

export type ModelLocationConditionInput = {
  locationName?: ModelStringInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
  organizationLocationsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLocationInput = {
  id: string,
  locationName?: string | null,
  _version?: number | null,
  organizationLocationsId?: string | null,
};

export type DeleteLocationInput = {
  id: string,
  _version?: number | null,
};

export type CreateCheckInInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  phone: string,
  complete: boolean,
  showError?: boolean | null,
  errorPrompt?: string | null,
  timerCleared?: boolean | null,
  createdTime: number,
  hasReservation?: boolean | null,
  _version?: number | null,
  locationCheckInsId: string,
};

export type ModelCheckInConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  complete?: ModelBooleanInput | null,
  showError?: ModelBooleanInput | null,
  errorPrompt?: ModelStringInput | null,
  timerCleared?: ModelBooleanInput | null,
  createdTime?: ModelIntInput | null,
  hasReservation?: ModelBooleanInput | null,
  and?: Array< ModelCheckInConditionInput | null > | null,
  or?: Array< ModelCheckInConditionInput | null > | null,
  not?: ModelCheckInConditionInput | null,
  locationCheckInsId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCheckInInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  phone?: string | null,
  complete?: boolean | null,
  showError?: boolean | null,
  errorPrompt?: string | null,
  timerCleared?: boolean | null,
  createdTime?: number | null,
  hasReservation?: boolean | null,
  _version?: number | null,
  locationCheckInsId?: string | null,
};

export type DeleteCheckInInput = {
  id: string,
  _version?: number | null,
};

export type CreateCustomLabelInput = {
  id?: string | null,
  name: string,
  value: string,
  _version?: number | null,
  organizationCustomLabelsId?: string | null,
};

export type ModelCustomLabelConditionInput = {
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelCustomLabelConditionInput | null > | null,
  or?: Array< ModelCustomLabelConditionInput | null > | null,
  not?: ModelCustomLabelConditionInput | null,
  organizationCustomLabelsId?: ModelIDInput | null,
};

export type UpdateCustomLabelInput = {
  id: string,
  name?: string | null,
  value?: string | null,
  _version?: number | null,
  organizationCustomLabelsId?: string | null,
};

export type DeleteCustomLabelInput = {
  id: string,
  _version?: number | null,
};

export type ModelOrganizationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  logoId?: ModelStringInput | null,
  users?: ModelStringInput | null,
  and?: Array< ModelOrganizationFilterInput | null > | null,
  or?: Array< ModelOrganizationFilterInput | null > | null,
  not?: ModelOrganizationFilterInput | null,
};

export type ModelOrganizationConnection = {
  __typename: "ModelOrganizationConnection",
  items:  Array<Organization | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null,
  locationName?: ModelStringInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
  organizationLocationsId?: ModelIDInput | null,
};

export type ModelCheckInFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  complete?: ModelBooleanInput | null,
  showError?: ModelBooleanInput | null,
  errorPrompt?: ModelStringInput | null,
  timerCleared?: ModelBooleanInput | null,
  createdTime?: ModelIntInput | null,
  hasReservation?: ModelBooleanInput | null,
  and?: Array< ModelCheckInFilterInput | null > | null,
  or?: Array< ModelCheckInFilterInput | null > | null,
  not?: ModelCheckInFilterInput | null,
  locationCheckInsId?: ModelIDInput | null,
};

export type ModelCustomLabelFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  value?: ModelStringInput | null,
  and?: Array< ModelCustomLabelFilterInput | null > | null,
  or?: Array< ModelCustomLabelFilterInput | null > | null,
  not?: ModelCustomLabelFilterInput | null,
  organizationCustomLabelsId?: ModelIDInput | null,
};

export type ModelSubscriptionOrganizationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  logoId?: ModelSubscriptionStringInput | null,
  users?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrganizationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLocationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  locationName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLocationFilterInput | null > | null,
  or?: Array< ModelSubscriptionLocationFilterInput | null > | null,
};

export type ModelSubscriptionCheckInFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  complete?: ModelSubscriptionBooleanInput | null,
  showError?: ModelSubscriptionBooleanInput | null,
  errorPrompt?: ModelSubscriptionStringInput | null,
  timerCleared?: ModelSubscriptionBooleanInput | null,
  createdTime?: ModelSubscriptionIntInput | null,
  hasReservation?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCheckInFilterInput | null > | null,
  or?: Array< ModelSubscriptionCheckInFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionCustomLabelFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCustomLabelFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomLabelFilterInput | null > | null,
};

export type CreateOrganizationMutationVariables = {
  input: CreateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type CreateOrganizationMutation = {
  createOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    logoId?: string | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        locationName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationLocationsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?: Array< string | null > | null,
    customLabels?:  {
      __typename: "ModelCustomLabelConnection",
      items:  Array< {
        __typename: "CustomLabel",
        id: string,
        name: string,
        value: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationCustomLabelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrganizationMutationVariables = {
  input: UpdateOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type UpdateOrganizationMutation = {
  updateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    logoId?: string | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        locationName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationLocationsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?: Array< string | null > | null,
    customLabels?:  {
      __typename: "ModelCustomLabelConnection",
      items:  Array< {
        __typename: "CustomLabel",
        id: string,
        name: string,
        value: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationCustomLabelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrganizationMutationVariables = {
  input: DeleteOrganizationInput,
  condition?: ModelOrganizationConditionInput | null,
};

export type DeleteOrganizationMutation = {
  deleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    logoId?: string | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        locationName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationLocationsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?: Array< string | null > | null,
    customLabels?:  {
      __typename: "ModelCustomLabelConnection",
      items:  Array< {
        __typename: "CustomLabel",
        id: string,
        name: string,
        value: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationCustomLabelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    locationName: string,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        firstName: string,
        lastName: string,
        phone: string,
        complete: boolean,
        showError?: boolean | null,
        errorPrompt?: string | null,
        timerCleared?: boolean | null,
        createdTime: number,
        hasReservation?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        locationCheckInsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationLocationsId: string,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    locationName: string,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        firstName: string,
        lastName: string,
        phone: string,
        complete: boolean,
        showError?: boolean | null,
        errorPrompt?: string | null,
        timerCleared?: boolean | null,
        createdTime: number,
        hasReservation?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        locationCheckInsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationLocationsId: string,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    locationName: string,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        firstName: string,
        lastName: string,
        phone: string,
        complete: boolean,
        showError?: boolean | null,
        errorPrompt?: string | null,
        timerCleared?: boolean | null,
        createdTime: number,
        hasReservation?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        locationCheckInsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationLocationsId: string,
  } | null,
};

export type CreateCheckInMutationVariables = {
  input: CreateCheckInInput,
  condition?: ModelCheckInConditionInput | null,
};

export type CreateCheckInMutation = {
  createCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    timerCleared?: boolean | null,
    createdTime: number,
    hasReservation?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationCheckInsId: string,
  } | null,
};

export type UpdateCheckInMutationVariables = {
  input: UpdateCheckInInput,
  condition?: ModelCheckInConditionInput | null,
};

export type UpdateCheckInMutation = {
  updateCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    timerCleared?: boolean | null,
    createdTime: number,
    hasReservation?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationCheckInsId: string,
  } | null,
};

export type DeleteCheckInMutationVariables = {
  input: DeleteCheckInInput,
  condition?: ModelCheckInConditionInput | null,
};

export type DeleteCheckInMutation = {
  deleteCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    timerCleared?: boolean | null,
    createdTime: number,
    hasReservation?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationCheckInsId: string,
  } | null,
};

export type CreateCustomLabelMutationVariables = {
  input: CreateCustomLabelInput,
  condition?: ModelCustomLabelConditionInput | null,
};

export type CreateCustomLabelMutation = {
  createCustomLabel?:  {
    __typename: "CustomLabel",
    id: string,
    name: string,
    value: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationCustomLabelsId?: string | null,
  } | null,
};

export type UpdateCustomLabelMutationVariables = {
  input: UpdateCustomLabelInput,
  condition?: ModelCustomLabelConditionInput | null,
};

export type UpdateCustomLabelMutation = {
  updateCustomLabel?:  {
    __typename: "CustomLabel",
    id: string,
    name: string,
    value: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationCustomLabelsId?: string | null,
  } | null,
};

export type DeleteCustomLabelMutationVariables = {
  input: DeleteCustomLabelInput,
  condition?: ModelCustomLabelConditionInput | null,
};

export type DeleteCustomLabelMutation = {
  deleteCustomLabel?:  {
    __typename: "CustomLabel",
    id: string,
    name: string,
    value: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationCustomLabelsId?: string | null,
  } | null,
};

export type GetOrganizationQueryVariables = {
  id: string,
};

export type GetOrganizationQuery = {
  getOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    logoId?: string | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        locationName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationLocationsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?: Array< string | null > | null,
    customLabels?:  {
      __typename: "ModelCustomLabelConnection",
      items:  Array< {
        __typename: "CustomLabel",
        id: string,
        name: string,
        value: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationCustomLabelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrganizationsQuery = {
  listOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name: string,
      logoId?: string | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?: Array< string | null > | null,
      customLabels?:  {
        __typename: "ModelCustomLabelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrganizationsQueryVariables = {
  filter?: ModelOrganizationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrganizationsQuery = {
  syncOrganizations?:  {
    __typename: "ModelOrganizationConnection",
    items:  Array< {
      __typename: "Organization",
      id: string,
      name: string,
      logoId?: string | null,
      locations?:  {
        __typename: "ModelLocationConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      users?: Array< string | null > | null,
      customLabels?:  {
        __typename: "ModelCustomLabelConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    locationName: string,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        firstName: string,
        lastName: string,
        phone: string,
        complete: boolean,
        showError?: boolean | null,
        errorPrompt?: string | null,
        timerCleared?: boolean | null,
        createdTime: number,
        hasReservation?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        locationCheckInsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationLocationsId: string,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      locationName: string,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      organizationLocationsId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLocationsQuery = {
  syncLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      locationName: string,
      checkIns?:  {
        __typename: "ModelCheckInConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      organizationLocationsId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCheckInQueryVariables = {
  id: string,
};

export type GetCheckInQuery = {
  getCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    timerCleared?: boolean | null,
    createdTime: number,
    hasReservation?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationCheckInsId: string,
  } | null,
};

export type ListCheckInsQueryVariables = {
  filter?: ModelCheckInFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCheckInsQuery = {
  listCheckIns?:  {
    __typename: "ModelCheckInConnection",
    items:  Array< {
      __typename: "CheckIn",
      id: string,
      firstName: string,
      lastName: string,
      phone: string,
      complete: boolean,
      showError?: boolean | null,
      errorPrompt?: string | null,
      timerCleared?: boolean | null,
      createdTime: number,
      hasReservation?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationCheckInsId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCheckInsQueryVariables = {
  filter?: ModelCheckInFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCheckInsQuery = {
  syncCheckIns?:  {
    __typename: "ModelCheckInConnection",
    items:  Array< {
      __typename: "CheckIn",
      id: string,
      firstName: string,
      lastName: string,
      phone: string,
      complete: boolean,
      showError?: boolean | null,
      errorPrompt?: string | null,
      timerCleared?: boolean | null,
      createdTime: number,
      hasReservation?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationCheckInsId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCustomLabelQueryVariables = {
  id: string,
};

export type GetCustomLabelQuery = {
  getCustomLabel?:  {
    __typename: "CustomLabel",
    id: string,
    name: string,
    value: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationCustomLabelsId?: string | null,
  } | null,
};

export type ListCustomLabelsQueryVariables = {
  filter?: ModelCustomLabelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomLabelsQuery = {
  listCustomLabels?:  {
    __typename: "ModelCustomLabelConnection",
    items:  Array< {
      __typename: "CustomLabel",
      id: string,
      name: string,
      value: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      organizationCustomLabelsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCustomLabelsQueryVariables = {
  filter?: ModelCustomLabelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCustomLabelsQuery = {
  syncCustomLabels?:  {
    __typename: "ModelCustomLabelConnection",
    items:  Array< {
      __typename: "CustomLabel",
      id: string,
      name: string,
      value: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      organizationCustomLabelsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnCreateOrganizationSubscription = {
  onCreateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    logoId?: string | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        locationName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationLocationsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?: Array< string | null > | null,
    customLabels?:  {
      __typename: "ModelCustomLabelConnection",
      items:  Array< {
        __typename: "CustomLabel",
        id: string,
        name: string,
        value: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationCustomLabelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnUpdateOrganizationSubscription = {
  onUpdateOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    logoId?: string | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        locationName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationLocationsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?: Array< string | null > | null,
    customLabels?:  {
      __typename: "ModelCustomLabelConnection",
      items:  Array< {
        __typename: "CustomLabel",
        id: string,
        name: string,
        value: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationCustomLabelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrganizationSubscriptionVariables = {
  filter?: ModelSubscriptionOrganizationFilterInput | null,
};

export type OnDeleteOrganizationSubscription = {
  onDeleteOrganization?:  {
    __typename: "Organization",
    id: string,
    name: string,
    logoId?: string | null,
    locations?:  {
      __typename: "ModelLocationConnection",
      items:  Array< {
        __typename: "Location",
        id: string,
        locationName: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationLocationsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    users?: Array< string | null > | null,
    customLabels?:  {
      __typename: "ModelCustomLabelConnection",
      items:  Array< {
        __typename: "CustomLabel",
        id: string,
        name: string,
        value: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        organizationCustomLabelsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    locationName: string,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        firstName: string,
        lastName: string,
        phone: string,
        complete: boolean,
        showError?: boolean | null,
        errorPrompt?: string | null,
        timerCleared?: boolean | null,
        createdTime: number,
        hasReservation?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        locationCheckInsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationLocationsId: string,
  } | null,
};

export type OnUpdateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    locationName: string,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        firstName: string,
        lastName: string,
        phone: string,
        complete: boolean,
        showError?: boolean | null,
        errorPrompt?: string | null,
        timerCleared?: boolean | null,
        createdTime: number,
        hasReservation?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        locationCheckInsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationLocationsId: string,
  } | null,
};

export type OnDeleteLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    locationName: string,
    checkIns?:  {
      __typename: "ModelCheckInConnection",
      items:  Array< {
        __typename: "CheckIn",
        id: string,
        firstName: string,
        lastName: string,
        phone: string,
        complete: boolean,
        showError?: boolean | null,
        errorPrompt?: string | null,
        timerCleared?: boolean | null,
        createdTime: number,
        hasReservation?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        locationCheckInsId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationLocationsId: string,
  } | null,
};

export type OnCreateCheckInSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInFilterInput | null,
};

export type OnCreateCheckInSubscription = {
  onCreateCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    timerCleared?: boolean | null,
    createdTime: number,
    hasReservation?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationCheckInsId: string,
  } | null,
};

export type OnUpdateCheckInSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInFilterInput | null,
};

export type OnUpdateCheckInSubscription = {
  onUpdateCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    timerCleared?: boolean | null,
    createdTime: number,
    hasReservation?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationCheckInsId: string,
  } | null,
};

export type OnDeleteCheckInSubscriptionVariables = {
  filter?: ModelSubscriptionCheckInFilterInput | null,
};

export type OnDeleteCheckInSubscription = {
  onDeleteCheckIn?:  {
    __typename: "CheckIn",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    timerCleared?: boolean | null,
    createdTime: number,
    hasReservation?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationCheckInsId: string,
  } | null,
};

export type OnCreateCustomLabelSubscriptionVariables = {
  filter?: ModelSubscriptionCustomLabelFilterInput | null,
};

export type OnCreateCustomLabelSubscription = {
  onCreateCustomLabel?:  {
    __typename: "CustomLabel",
    id: string,
    name: string,
    value: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationCustomLabelsId?: string | null,
  } | null,
};

export type OnUpdateCustomLabelSubscriptionVariables = {
  filter?: ModelSubscriptionCustomLabelFilterInput | null,
};

export type OnUpdateCustomLabelSubscription = {
  onUpdateCustomLabel?:  {
    __typename: "CustomLabel",
    id: string,
    name: string,
    value: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationCustomLabelsId?: string | null,
  } | null,
};

export type OnDeleteCustomLabelSubscriptionVariables = {
  filter?: ModelSubscriptionCustomLabelFilterInput | null,
};

export type OnDeleteCustomLabelSubscription = {
  onDeleteCustomLabel?:  {
    __typename: "CustomLabel",
    id: string,
    name: string,
    value: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    organizationCustomLabelsId?: string | null,
  } | null,
};
