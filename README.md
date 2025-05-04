// mutation testing

1. instal stryker
   npm install --save-dev @stryker-mutator/core @stryker-mutator/jest-runner
2. Buat file stryker.config.js:
   Kalau kamu belum punya jest.config.js, buat sederhana saja:
   module.exports = {
   testEnvironment: 'node',
   };
3. npx stryker run

// statement & branch testing

1. instal jest
   npm install --save-dev jest
2. Tambahkan script ke package.json:
   "scripts": {
   "test": "jest --coverage"
   }
3. npm test
