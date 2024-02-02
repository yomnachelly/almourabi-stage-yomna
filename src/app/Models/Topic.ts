export enum Status { OPEN = "open", CLOSED = "closed" };

export interface Topic {
    id: number;
    title: string;
    subject: string;
    likes: number;
    replies: number;
    views: number;
    activity: string;
    status: Status;
}
