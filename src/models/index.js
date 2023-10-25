// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Organization, Location, CheckIn, CustomLabel } = initSchema(schema);

export {
  Organization,
  Location,
  CheckIn,
  CustomLabel
};