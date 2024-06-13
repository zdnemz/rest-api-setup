module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testMatch: ["**/__test__/**/*.test.ts"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};
