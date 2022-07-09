#!/usr/bin/env node
import { randomArrayNumber } from '@snakglom/hello-monorepo-pnpm-core';
import inquirer, { DistinctQuestion } from 'inquirer';
import { from } from 'rxjs';
const question: DistinctQuestion[] = [{
    name: 'testAnswer',
    message: 'Hello World!',
    type: 'list',
    choices: randomArrayNumber(4).map((x) => x.toString())
}];

const observable = from(question);

inquirer.prompt(observable).ui.process.subscribe({
    next(value) {
        console.log("Your answer: ", value.answer)
    }
})