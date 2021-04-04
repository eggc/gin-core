module.exports = {
  "testMatch": [
    "**/tests/**/*.test.ts",
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "moduleNameMapper": {
    "^@/(.+)": "<rootDir>/src/$1"
  }
}
