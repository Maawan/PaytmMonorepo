import "dotenv/config"; 
import { PrismaClient } from "../generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
const prismaClientSingleton = () => {
  const isProd = process.env.NODE_ENV === 'production'
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error('Missing DATABASE_URL environment variable for Prisma')
  }

  const adapter = new PrismaPg({ connectionString })

  return new PrismaClient({
    adapter,
    errorFormat: isProd ? 'minimal' : 'pretty',
    log: isProd ? ['error'] : ['query', 'error', 'warn', 'info'],
  })
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma: ReturnType<typeof prismaClientSingleton> = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
