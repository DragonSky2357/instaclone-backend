"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerCore = require("apollo-server-core");

var _templateObject;

var _default = (0, _apolloServerCore.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  type SeeFollowingResult {\n    ok: Boolean!\n    error: String\n    following: [User]\n  }\n  type Query {\n    seeFollowing(username: String!, lastId: Int): SeeFollowingResult!\n  }\n"])));

exports["default"] = _default;