import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Customer: {},
  Order: {}
};

const pluralNames = { };

export const entityConfig = {
  entityMetadata,
  pluralNames
};