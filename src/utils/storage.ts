import { Activity, ActivityLog } from '../types';

const STORAGE_KEY = 'activity-tracker-data';

export const saveToLocalStorage = (data: ActivityLog) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadFromLocalStorage = (): ActivityLog => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { activities: [] };
};

export const addActivity = (activity: Activity) => {
  const data = loadFromLocalStorage();
  data.activities.push(activity);
  saveToLocalStorage(data);
};

export const deleteActivity = (id: string) => {
  const data = loadFromLocalStorage();
  data.activities = data.activities.filter(activity => activity.id !== id);
  saveToLocalStorage(data);
};