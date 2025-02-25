import "@testing-library/jest-dom";
// JEST의 기본 환경인 Node.js가 없으므로 임의로 API제공
global.TextEncoder = global.TextEncoder || require("util").TextEncoder;  // TextEncoder 폴리필
global.TextDecoder = global.TextDecoder || require("util").TextDecoder;  // TextDecoder 폴리필
global.Response = global.Response || require("node-fetch").Response;  // Response 폴리필
global.fetch = global.fetch || require("node-fetch");  // fetch 폴리필