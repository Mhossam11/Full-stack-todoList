export interface ITodo{
    id: string;
    title: string;
    body: string | null;
    Completed: boolean;
    createdAt?: Date;
}