import { describe, expect, test } from 'vitest'

import { capitalizeFirstLetter } from "../helpers/strings";

describe('Receives a string and capitalize first letter of each word', () => {
  test('capitalized equals to Hello World!', () => {
    let capitalized = capitalizeFirstLetter('hello world!')

    expect(capitalized).toBe('Hello World!');
  });
  test('capitalized equals to Capitalize', () => {
    let capitalized = capitalizeFirstLetter('capitalize')

    expect(capitalized).toBe('Capitalize');
  });
  test('capitalized equals to  ""', () => {
    let capitalized = capitalizeFirstLetter('')

    expect(capitalized).toBe('');
  });


});