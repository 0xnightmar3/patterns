declare global {
    namespace NodeJS {
        interface ProcessEnv {
            ZIP: number;
            APP_ID: string;
            FROM_ID: string;
            API_KEY: string;
            COUNTRY: string;
            SENDER_ID: string;
            SMTP_HOST: string;
            SMTP_PORT: number;
            FROM_ADDRESS: string;
        };
    };
};

export {};
