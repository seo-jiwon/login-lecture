"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//브라우저에서 루트로 요청이 들어오면 아래 기능 수행
router.get("/", ctrl.home);

// 경로의 앞에 /는 꼭 넣어주기 루트를 의미
router.get("/login", ctrl.login);

// 외부로 내보내기
module.exports = router;