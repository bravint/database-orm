const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice',
        }
    });

    console.log('Customer created', createdCustomer);

    const createdContact = await prisma.contact.create({
        data: {
            phone: `+442084403865`,
            email: `hello@world.com`,
            customer: {
                create: [{ name: `Bravin` }, {name: `Alexa`}],
            },
        },
    });

    console.log('contact created', createdContact);
    // Don't edit any of the code below this line
    process.exit(0);
}

seed().catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
});
