
const fetchMock = require('fetch-mock');

  it('can fetch data', async () => {
    fetchMock.mock('https://api.punkapi.com/v2/beers', 200);
    const res = await fetch('https://api.punkapi.com/v2/beers');
    expect(res.ok);
    fetchMock.restore();
  });


