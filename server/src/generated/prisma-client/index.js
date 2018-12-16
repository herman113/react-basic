"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Workout",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/public-veilbrow-664/react-basic/dev`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Workout",
    embedded: false
  }
];
