export const DEPOSITOR_TYPE = "DEPOSITOR";
export const WITHDRAWL_TYPE = "WITHDRAWL";

export type DEPOSITOR_TYPE = typeof DEPOSITOR_TYPE;
export type WITHDRAWL_TYPE = typeof WITHDRAWL_TYPE;

export enum SAVING_TYPES {
  DEPOSITOR = DEPOSITOR_TYPE,
  WITHDRAWL = WITHDRAWL_TYPE,
}
