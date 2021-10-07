const DB_URL = "http://computerssqlapiv1-env.eba-tkhyap3p.eu-west-1.elasticbeanstalk.com";
// const DB_URL = "http://localhost:8081";


export const getComputersFromDB = async () => {
    try {
        const res = await fetch(DB_URL + `/computers`, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await res.json();
        if (data.status === 500 || data.status === 400 || data.status === 404) {
            throw data
        }
        return data;
    } catch (err) {
        throw (err)
    }
};

