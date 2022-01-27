const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomer = await prisma.customer.create({
        data: {
            name: 'Alice',
        },
    });

    console.log('Customer created', createdCustomer);

    const createdContact = await prisma.contact.create({
        data: {
            phone: `+442084403865`,
            email: `hello@world.com`,
            customer: {
                create: { name: `Bravin` },
            },
        },
    });

    console.log('contact created', createdContact);

    const createdMovie = await prisma.movie.create({
        data: {
            title: `Jurassic Park`,
            runtimeMins: 200,
        },
    });

    console.log('movie created', createdMovie);

    const createdScreen = await prisma.screen.create({
        data: {
            number: 1,
        },
    });

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: '2022-03-19T14:21:00+00:00',
            movie: {
                connect: {
                    id: createdMovie.id,
                },
            },
            screen: {
                connect: {
                    id: createdScreen.id,
                },
            },
        },
    });

    console.log('screening created', createdScreening);

    const createdTicket = await prisma.ticket.create({
        data: {
            customer: {
                create: {name: `Alexa`}
            },
            screening: {
                create: {startsAt: '2022-03-19T14:21:00+00:00',}
            }
        }
    })

    console.log('ticket created', createdTicket);

    // Don't edit any of the code below this line
    process.exit(0);
}

seed().catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
});
