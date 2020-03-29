import { EntityMetadataMap } from "@ngrx/data";

const entityMetadata: EntityMetadataMap = {
  Hero: {}
};

const pluralNames = { Hero: "Heroes" };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
