import HTTPTransport from './HTTPTransport';

import { expect } from 'chai';
import jsdom from 'mocha-jsdom';

describe('HTTPTransport', () => {
  jsdom({ url: 'http://localhost' });

  it('GET должен вернуть статус 200', async () => {
    const http = new HTTPTransport('/api/get');
    const res = await http.get('');
    expect(res).to.have.property('status').and.equal(200);
  });
});
