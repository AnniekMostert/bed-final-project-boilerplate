import { PrismaClient } from "@prisma/client";

const createBooking = async (newBooking) => {
  const prisma = new PrismaClient();
  const { userId, propertyId, ...rest } = newBooking;

  const booking = await prisma.booking.create({
    data: {
      ...rest,
      userId: { connect: { id: userId } },
      propertyId: { connect: { id: propertyId } },
    },
  });

  return booking;
};

export default createBooking;
