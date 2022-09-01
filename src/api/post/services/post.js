"use strict";

/**
 * post service
 */

// add custom route

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::post.post");
