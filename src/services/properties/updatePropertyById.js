import { PrismaClient } from "@prisma/client";

const updatePropertyById = async (id, updatedProperty) => {
  const prisma = new PrismaClient();
  const { hostId, ...rest } = updatedProperty;

  const property = await prisma.property.updateMany({
    where: { id },
    data: {
      ...rest,
      hostId: { connect: { id: hostId } },
    },
  });

  return property;
};

export default updatePropertyById;
