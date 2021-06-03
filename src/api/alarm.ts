import { ApiResponse } from "types";
import { apiRequest } from "utils";

interface Alarm {
  description: string;
  id: number;
  status: string;
  title: string;
}

export const getAlarmList = async (): Promise<ApiResponse<Alarm[]>> =>
  await apiRequest("GET", `/api/alarm`);

export const createAlarm = async (): Promise<ApiResponse<Alarm>> =>
  await apiRequest("POST", `/api/alarm`);

export const updateAlarm = async (
  alarmId: number
): Promise<ApiResponse<Alarm>> =>
  await apiRequest("PUT", `/api/alarm/${alarmId}`);

export const deleteAlarm = async (
  alarmId: number
): Promise<ApiResponse<Alarm>> =>
  await apiRequest("DELETE", `/api/alarm/${alarmId}`);

export const getAlarm = async (alarmId: number): Promise<ApiResponse<Alarm>> =>
  await apiRequest("GET", `/api/alarm/${alarmId}`);

export const myAlarm = async (userId: number): Promise<ApiResponse<Alarm[]>> =>
  await apiRequest("GET", `/api/alarm/${userId}/myAlarm`);
