import { PrismaClient } from "@prisma/client";

const updateAmenityById = async (id, updatedAmenity) => {
  const prisma = new PrismaClient();
  const { hostId, ...rest } = updatedAmenity;

  const amenity = await prisma.amenity.updateMany({
    where: { id },
    data: {
      ...rest,
      hostId: { connect: { id: hostId } },
    },
  });

  return amenity;
};

export default updateAmenityById;
