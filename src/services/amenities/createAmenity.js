import { PrismaClient } from "@prisma/client";

const createAmenity = async (newAmenity) => {
  const prisma = new PrismaClient();
  const { hostId, ...rest } = newAmenity;

  const amenity = await prisma.amenity.create({
    data: {
      ...rest,
      hostId: { connect: { id: hostId } },
    },
  });

  return amenity;
};

export default createAmenity;
