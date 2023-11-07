const { Router } = require("express");
const { isAuth, check } = require("../middlewear/isAuth");
const { blogui, addblog, getblog, uiblog, updateblog } = require("../controller/blog.contoller");
const blog = Router()

blog.get("/create",isAuth,blogui)
blog.post("/create",isAuth,check, addblog);
blog.get("/blogs",getblog)
blog.get("/",uiblog)
// blog.patch("/edit/:id",isAuth, updateblog)

module.exports = blog