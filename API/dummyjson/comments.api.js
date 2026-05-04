const { expect } = require('@playwright/test');

// Function to create a new comment using the API client
export async function createComment(apiClient, commentObject) {
    // Send a POST request to create a new comment
    const newComment = await apiClient.post('https://dummyjson.com/posts/add', {
        headers: { 'Content-Type': 'application/json' },
        // Convert the comment object to a JSON string for the request body
        // commentObject refers to the comment data passed from the test case
        data: JSON.stringify(commentObject)
    });

    // Parse the response body as JSON and validate the response structure
    const responseBody = await newComment.json();
    expect(responseBody).toMatchObject({
        id: 252,
        title: 'I am in love with someone.',
        userId: 5,
    });
    // Return the response body for further use in the test case
    return responseBody;
}