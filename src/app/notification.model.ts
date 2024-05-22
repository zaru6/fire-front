export interface INotification {
    type: 'success' | 'warning' | 'error';
    message: string;
    duration?: number;
}