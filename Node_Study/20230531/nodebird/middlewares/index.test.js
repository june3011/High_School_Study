// test("1 + 1은 2입니다.", () => {
//   expect(1 + 1).toEqual(2);
// });

const { describe } = require("../models/user");
const { isLoggedIn, isNotLoggedIn } = require("./");

describe("isLoggedIn", () => {
  const res = {
    status: jest.fn(() => res),
    send: jest.fn(),
  };
  const next = jest.fn();

  test("로그인 되어 있으면 isLoggedIn이 next를 호출해야 함", () => {
    const req = {
      isAuthenticated: jest.fn(() => true),
    };
    isLoggedIn(req, res, next);
    expect(next).toBeCalledTimes(1); // 함수 호출 횟수 검증
  });
  test("로그인 되어 있지 않으면 isLoggedIn이 에러를 응답해야 함", () => {
    const req = {
      isAuthenticated: jest.fn(() => false),
    };
    isLoggedIn(req, res, next);
    expect(res.status).toBeCalledWith(403);
    expect(res.send).toBeCalledWith("로그인 필요");
  });
});

describe("isNotLoggedIn", () => {
  const res = {
    redirect: jest.fn(),
  };
  const next = jest.fn();

  test("로그인 되어 있으면 isNotLogged이 에러를 응답해야 함", () => {
    const req = {
      isAuthenticated: jest.fn(() => true),
    };
    isNotLoggedIn(req, res, next);
    expect(next).toBeCalledTimes(1);
  });

  test("로그인 되어 있지 않으면 isNotLoggedIn이 next를 호출해야 함", () => {
    const req = {
      isAuthenticated: jest.fn(() => false),
    };
    const message = encodeURIComponent("로그인한 상태입니다.");
    isNotLoggedIn(req, res, next);
    expect(res.redirect).toBeCalledWith(`/?error=${message}`);
  });
});
