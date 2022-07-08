const fish = { id: 58, name: 'hilsha', price: 8000, phone: '01999999', adress: 'chandpura', dress: 'silver' };
/*const phone = fish.phone;//for taking phnnumbr multiple times
const price = fish.price;
const dress= fish.dress;
const id = fish.id;
console.log(phone);*///old method

//new

const { phone, price, dress, id } = fish;
/*console.log(phone);
console.log(phone,price);
console.log(phone,dress);
console.log(phone,id);*/
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(work, framework, food,second);