const fs = require('fs');


jest.mock('request-promise');
const request = require('request-promise');

const xml = fs.readFileSync(`${__dirname}/xml/shows.xml`);
request.mockImplementation(() => Promise.resolve(xml));

const getShows = require('../').getShows;

describe('getShows', () => {
  it('requests from url appended with /Schedule and with parameters', () =>
    getShows('https://example.com/xml', { area: 1234 }).then(() => {
      expect(request).toHaveBeenCalledWith({
        url: 'https://example.com/xml/Schedule',
        qs: { area: 1234 },
      });
    })
  );

  it('gets list of shows', () =>
    getShows('https://example.com/xml', { area: 1234 }).then((shows) => {
      expect(shows).toEqual([
        expect.objectContaining({
          dttmShowStart: '2017-02-12T11:00:00',
          Title: 'Lego Batman movie',
        }),
        expect.objectContaining({
          dttmShowStart: '2017-02-12T11:00:00',
          Title: 'Ballerina',
        }),
        expect.objectContaining({
          dttmShowStart: '2017-02-12T11:10:00',
          Title: 'November',
        }),
        expect.objectContaining({
          dttmShowStart: '2017-02-12T11:30:00',
          Title: 'Ballerina',
        }),
      ]);
    })
  );
});
