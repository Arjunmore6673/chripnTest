
const getData = async () => {
    try {
        let response = await fetch("", {
            method: 'GET',
        });
        let res = await response.json();
        const data = res.books;
        dispatch(addData(data));
    } catch (error) {
        AlertCommon("something went wrong", error)
    }
};
