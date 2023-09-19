export const login = async (name:string) => {
    try {
        localStorage.setItem('user', name);
        // eslint-disable-next-line no-promise-executor-return
        await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (e) {
        console.log('ERROR login', e);
    }
};
