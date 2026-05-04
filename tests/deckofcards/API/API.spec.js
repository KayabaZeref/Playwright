const { test, expect } = require('@playwright/test');
const { log } = require('node:console');

test('API shuffles deck correctly', async ({ request }) => {
    // Send a GET request to the shuffle endpoint of the Deck of Cards API
    const response = await request.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    // Assert that the response status is 200 (OK)
    expect(response.status()).toBe(200);

    // Parse the JSON response and assert that it contains the expected properties
    const data = await response.json();
    log(data);
    // Assert that the response contains the expected properties and values
    expect(data).toHaveProperty('success', true);
    expect(data).toHaveProperty('deck_id');
    expect(data).toHaveProperty('shuffled', true);
    expect(data).toHaveProperty('remaining', 52);
});