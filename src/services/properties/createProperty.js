import { PrismaClient } from "@prisma/client";

const createProperty = async (newProperty) => {
  const prisma = new PrismaClient();
  const { hostId, ...rest } = newProperty;

  const property = await prisma.property.create({
    data: {
      ...rest,
      hostId: { connect: { id: hostId } },
    },
  });

  return property;
};

export default createProperty;
