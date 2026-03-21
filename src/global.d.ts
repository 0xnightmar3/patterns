declare global {
    namespace NodeJS {
        interface ProcessEnv {
            APP_ID: string;
            FROM_ID: string;
            API_KEY: string;
            SENDER_ID: string;
            SMTP_HOST: string;
            SMTP_PORT: number;
            FROM_ADDRESS: string;
        };
    };
};

export {};
