const ambilData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ data: "Data berhasil" });
            } else {
                reject(new Error("Gagal mengambil data"));
            }
        }, 1000);
    });
};

ambilData()
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Selesai"));

const req1 = new Promise(resolve => setTimeout(() => resolve("Hasil 1"), 500));
const req2 = new Promise(resolve => setTimeout(() => resolve("Hasil 2"), 1000));

Promise.all([req1, req2])
    .then(([res1, res2]) => console.log("Promise.all:", res1, res2));

Promise.race([req1, req2])
    .then(fastest => console.log("Promise.race:", fastest));
