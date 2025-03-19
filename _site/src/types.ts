export interface Activity {
  id: string;
  name: string;
  duration?: {
    hours: number;
    minutes: number;
  };
  quantity?: {
    value: number;
    unit: string;
  };
  date: string;
  type: 'duration' | 'quantity';
}

export interface ActivityLog {
  activities: Activity[];
}