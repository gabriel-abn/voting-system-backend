import { PrismaClient } from "@prisma/client";

export class PrismaService {
  private static instance: PrismaService;
  private client: PrismaClient;

  private constructor() {
    this.client = new PrismaClient();
  }

  public static getInstance(): PrismaService {
    if (!PrismaService.instance) {
      PrismaService.instance = new PrismaService();
    }

    return PrismaService.instance;
  }

  public getClient(): PrismaClient {
    return this.client;
  }
}

export const prismaService = PrismaService.getInstance().getClient();
