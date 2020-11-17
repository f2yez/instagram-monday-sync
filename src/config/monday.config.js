import mondaySdk from "monday-sdk-js";
import { PERSONAL_API_TOKEN } from './constants';

export const monday = mondaySdk();

export function setMondayToken() {
    monday.setToken(PERSONAL_API_TOKEN);
}