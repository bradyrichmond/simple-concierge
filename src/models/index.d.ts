import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly logoId?: string | null;
  readonly locations: (Location | null)[];
  readonly users?: (string | null)[] | null;
  readonly customLabels?: (CustomLabel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly logoId?: string | null;
  readonly locations: AsyncCollection<Location>;
  readonly users?: (string | null)[] | null;
  readonly customLabels: AsyncCollection<CustomLabel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Organization = LazyLoading extends LazyLoadingDisabled ? EagerOrganization : LazyOrganization

export declare const Organization: (new (init: ModelInit<Organization>) => Organization) & {
  copyOf(source: Organization, mutator: (draft: MutableModel<Organization>) => MutableModel<Organization> | void): Organization;
}

type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly locationName: string;
  readonly checkIns: (CheckIn | null)[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly organizationLocationsId?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly locationName: string;
  readonly checkIns: AsyncCollection<CheckIn>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly organizationLocationsId?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerCheckIn = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CheckIn, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly complete: boolean;
  readonly showError?: boolean | null;
  readonly errorPrompt?: string | null;
  readonly timerCleared?: boolean | null;
  readonly createdTime: number;
  readonly hasReservation?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly locationCheckInsId?: string | null;
}

type LazyCheckIn = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CheckIn, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly complete: boolean;
  readonly showError?: boolean | null;
  readonly errorPrompt?: string | null;
  readonly timerCleared?: boolean | null;
  readonly createdTime: number;
  readonly hasReservation?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly locationCheckInsId?: string | null;
}

export declare type CheckIn = LazyLoading extends LazyLoadingDisabled ? EagerCheckIn : LazyCheckIn

export declare const CheckIn: (new (init: ModelInit<CheckIn>) => CheckIn) & {
  copyOf(source: CheckIn, mutator: (draft: MutableModel<CheckIn>) => MutableModel<CheckIn> | void): CheckIn;
}

type EagerCustomLabel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomLabel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly value: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly organizationCustomLabelsId?: string | null;
}

type LazyCustomLabel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CustomLabel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly value: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly organizationCustomLabelsId?: string | null;
}

export declare type CustomLabel = LazyLoading extends LazyLoadingDisabled ? EagerCustomLabel : LazyCustomLabel

export declare const CustomLabel: (new (init: ModelInit<CustomLabel>) => CustomLabel) & {
  copyOf(source: CustomLabel, mutator: (draft: MutableModel<CustomLabel>) => MutableModel<CustomLabel> | void): CustomLabel;
}