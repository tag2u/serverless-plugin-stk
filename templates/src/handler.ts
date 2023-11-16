export const handler = async (event: unknown, context: unknown) => {
    console.log('Yep, we are up and running! 🚀')
}

export const status = async (event: unknown, context: unknown) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello there!',
        }),
    };
}