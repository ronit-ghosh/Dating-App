import { prisma } from "./db";

async function CreateLocationTable() {
  // Enable PostGIS
  await prisma.$executeRawUnsafe(`CREATE EXTENSION IF NOT EXISTS postgis;`);

  // Create locations table
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      user_id TEXT NOT NULL UNIQUE,
      location GEOGRAPHY(Point, 4326)
    );
  `);

  // Create geospatial index
  await prisma.$executeRawUnsafe(`
    CREATE INDEX IF NOT EXISTS idx_locations_location 
    ON locations USING GIST(location);
  `);

  console.log("✅ PostGIS setup complete");
}

CreateLocationTable()
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    prisma.$disconnect();
  });