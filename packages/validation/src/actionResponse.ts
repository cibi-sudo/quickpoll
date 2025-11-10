export type actionResponse =
    | {
    success: true;
    message: string;
}
    | {
    success: false;
    error: string;
    details?: string;
};

