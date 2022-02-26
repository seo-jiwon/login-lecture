"use strict";

const home = (req, res) => {
    res.render("home/index"); // 처음 폴더 경로를 views로 설정해서 앞에 안 적어도 됨
};

const login = (req, res) => {
    res.render("home/login");
};

module.exports = {
    home,
    login,
};