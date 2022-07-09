#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hello_monorepo_pnpm_core_1 = require("@snakglom/hello-monorepo-pnpm-core");
const inquirer_1 = __importDefault(require("inquirer"));
const rxjs_1 = require("rxjs");
const question = [{
        name: 'testAnswer',
        message: 'Hello World!',
        type: 'list',
        choices: (0, hello_monorepo_pnpm_core_1.randomArrayNumber)(4).map((x) => x.toString())
    }];
const observable = (0, rxjs_1.from)(question);
inquirer_1.default.prompt(observable).ui.process.subscribe({
    next(value) {
        console.log("Your answer: ", value.answer);
    }
});
