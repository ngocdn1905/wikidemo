const Env = {
    Integration: 1,
    UAT: 2,
    Production: 3,
};

const CURRENT_ENV = Env.Integration;

const StagingConfig = {
    baseURL: 'https://en.wikipedia.org/',
};
const UATConfig = {
    baseURL: null,
};
const ProdConfig = {
    baseURL: null,
};

const getConfig = () => {
    switch (CURRENT_ENV) {
        case Env.Integration:
            return StagingConfig;
        case Env.UAT:
            return UATConfig;
        case Env.Production:
            return ProdConfig;
    }
};

export const AppConfig = {
    getConfig,
};
