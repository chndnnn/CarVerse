import { boolean, integer, jsonb, pgTable, serial, varchar,uniqueIndex } from "drizzle-orm/pg-core";

const carListing = pgTable('carListing',{
    userName:varchar("userName"),
    id: serial("id").primaryKey(),
    make: varchar("make").notNull(),
    model: varchar("model").notNull(),
    year: integer("year").notNull(),
    color: varchar("color"),
    price: integer("price").notNull(),
    mileage: varchar("mileage").notNull(),
    fuelType: varchar("fuelType").notNull(),
    transmission: varchar("transmission").notNull(),
    vin: varchar("vin").notNull().unique(),
    engineSize: integer("engineSize"),
    drivetrain: varchar("drivetrain").notNull(),
    bodyType: varchar("bodyType").notNull(),
    condition: varchar("condition").notNull(),
    description: varchar("description"),
    airConditioning: boolean("airConditioning"),
    leatherSeats: boolean("leatherSeats"),
    sunroof: boolean("sunroof"),
    bluetooth: boolean("bluetooth"),
    backupCamera: boolean("backupCamera"),
    parkingSensors: boolean("parkingSensors"),
    heatedSeats: boolean("heatedSeats"),
    navigationSystem: boolean("navigationSystem"),
    antiLockBrakes: boolean("antiLockBrakes"),
    airbags: boolean("airbags"),
    tractionControl: boolean("tractionControl"),
    laneDepartureWarning: boolean("laneDepartureWarning"),
    blindSpotMonitoring: boolean("blindSpotMonitoring"),
    emergencyBraking: boolean("emergencyBraking"),
    carImages: jsonb("carImages").default([]),
})


export default carListing