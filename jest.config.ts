export default {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    setupFiles: ["dotenv/config"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    transformIgnorePatterns: [
        "/node_modules/(?!node-fetch)/", // node-fetch를 변환 대상으로 지정
      ],
};
