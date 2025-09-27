export interface Rental {
    id?: number;
    userId: number;
    carId: number;
    startDate: string;
    endDate: string;
    status: 'PENDING' | 'APPROVED' | 'CANCELLED' | 'COMPLETED';
}