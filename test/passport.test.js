const assert = require('assert');
const { toPassportConfig, claimsToCamelCase } = require('../src/passport');

const reader = {
  identityProviderUrl: 'a',
  logoutUrl: 'b',
  signingCerts: ['c'],
  identifierFormat: 'd',
  claimSchema: require('./data/claim-schema.json')
};

const claims = {
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn': 'some-user@some-company.com'
};

describe('passport helpers', () => {
  it('toPassportConfig()', () => {
    assert.deepStrictEqual(toPassportConfig(reader), {
      entryPoint: 'a',
      identityProviderUrl: 'a',
      logoutUrl: 'b',
      cert: 'c',
      identifierFormat: 'd'
    });
  });

  it('claimsToCamelCase()', () => {
    assert.deepStrictEqual(claimsToCamelCase(claims, reader.claimSchema), {
      upn: 'some-user@some-company.com'
    });
  });
});
