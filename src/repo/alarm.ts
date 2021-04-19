interface Alarm {
  description: string;
  id: number;
  status: string;
  title: string;
}

export const getAlarmList = async (): Promise<CAResponse<Alarm[]>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/alarm`, {
      method: "GET",
    })
  ).json();

export const createAlarm = async (): Promise<CAResponse<Alarm>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/alarm`, {
      method: "POST",
    })
  ).json();

export const updateAlarm = async (): Promise<CAResponse<Alarm>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/alarm`, {
      method: "DELETE",
    })
  ).json();

export const deleteAlarm = async (
  alarmId: number
): Promise<CAResponse<Alarm>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/alarm/${alarmId}`, {
      method: "DELETE",
    })
  ).json();

export const getAlarm = async (alarmId: number): Promise<CAResponse<Alarm>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/alarm/${alarmId}`, {
      method: "GET",
    })
  ).json();
