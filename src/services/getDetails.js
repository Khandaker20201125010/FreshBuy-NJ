export const services = async () => {
    const res = await fetch(`/api/users`);
    const  services =  res.json();
    return services;
}


export const getDetails = async (id) => {
    const res = await fetch(`/api/details/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch details');
    }
    const details = await res.json();
    return details;
};


