const { test, expect } = require('@playwright/test');
const { log } = require('node:console');
const { createComment } = require('../../../API/dummyjson/comments.api');

test('Send API request and Check Response', async ({ request }) => {
    // Define a comment object with the necessary properties for creating a new comment
    const comment = {
        title: 'I am in love with someone.',
        userId: 5,
        /* other post data */
    }
    // Call the createComment function to send a POST request and create a new comment,
    //  then store the response body
    const responseBody = await createComment(request, comment);

    // Send a GET request to retrieve the newly created comment using its ID
    //  and validate the response
    // responseBodyl.id = 252, which is the ID of the newly created comment
    const wrongResponseBody = await request.get('https://dummyjson.com/posts/' + responseBody.id);
    expect(await wrongResponseBody.json()).toMatchObject({
        message: "Post with id '252' not found"
    });
});