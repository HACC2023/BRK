// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  bigint,
  index,
  mysqlTableCreator,
  timestamp,
  varchar,
  text,
  tinyint,
  boolean,
  double,
  primaryKey,
  int
} from "drizzle-orm/mysql-core";
import type { AdapterAccount } from "@auth/core/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator((name) => `brk_${name}`);

export const itemsFound = mysqlTable(
  "debris_found",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    item: varchar("item", { length: 256 }),
  }
);

export const reportsToItem = mysqlTable(
  "reports_to_debris",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    item_id: bigint("item_id", { mode: "number" }),
    report_id: bigint("report_id", { mode: "number" }),
  },
  (table) => ({
    itemIndex: index("item_idx").on(table.item_id),
    reportIndex: index("report_idx").on(table.report_id),
  })
);

export const drumOption = mysqlTable(
  "drum_option",
  {
    id: tinyint('id').primaryKey().autoincrement(),
    value: varchar("value", { length: 256 }),
  }
)

export const marineGrowth = mysqlTable(
  "marine_growth",
  {
    id: tinyint('id').primaryKey().autoincrement(),
    value: varchar("value", { length: 256 }),
  }
)

export const islandOptions = mysqlTable(
  "island_options",
  {
    id: tinyint('id').primaryKey().autoincrement(),
    value: varchar("value", { length: 256 }),
  }
)

export const debrisLocation = mysqlTable(
  "debris_location",
  {
    id: tinyint('id').primaryKey().autoincrement(),
    value: varchar("value", { length: 256 }),
  }
)

export const debrisBestDescription = mysqlTable(
  "debris_Description",
  {
    id: tinyint("id").primaryKey().autoincrement(),
    value: varchar("value", { length: 256 }),
  }
)

export const reportImages = mysqlTable(
  "report_images",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    report_id: bigint("id", { mode: "number" }),
    pictureLocation: text("picture_location"),
  }
)

export const reports = mysqlTable(
  "reports",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    lastName: varchar("last_name", { length: 256 }),
    firstName: varchar("first_name", { length: 256 }),
    email: varchar("email", { length: 256 }),
    mailingAddress: varchar("mailing_address", { length: 256 }),
    city: varchar("city", { length: 256 }),
    state: varchar("state", { length: 256 }),
    zipCode: varchar("zipcode", { length: 6 }),
    phone: varchar("phone", { length: 20 }),
    description: text("description"),
    drumOptions: tinyint('drum_id'),
    yNBoat: boolean('YN_boat'),
    marineGrowthScale: tinyint('marine_growth_id'),
    debrisLocation: tinyint('debris_location_id'),
    island: tinyint('island_location'),
    lat: double("latitude"),
    lng: double("longitude"),
    landMark: varchar("land_mark", { length: 256 }),
    distanceFromLandMark: bigint("distance", {mode: "number"}),
    debrisBestDescription: tinyint('debris_description_id'),
    personalDebrisDescription: text("debris_description"),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull()
  },
  (table) => ({
    emailIndex: index("email_idx").on(table.email),
    latIndex: index("lat_idx").on(table.lat),
    lngIndex: index("lng_idx").on(table.lng),
  })
);

export const users = mysqlTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
    fsp: 3
  }).defaultNow(),
  image: varchar("image", { length: 255 }),
  organizationId: bigint("organization_id", { mode: "number" }),
  roleId: bigint("role_id", { mode: "number" }),
})

export const accounts = mysqlTable(
  "account",
  {
    userId: varchar("userId", { length: 255 })
      .notNull(),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: varchar("refresh_token", { length: 255 }),
    access_token: varchar("access_token", { length: 255 }),
    expires_at: int("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: varchar("id_token", { length: 255 }),
    session_state: varchar("session_state", { length: 255 })
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId)
  })
)

export const sessions = mysqlTable("session", {
  sessionToken: varchar("sessionToken", { length: 255 }).notNull().primaryKey(),
  userId: varchar("userId", { length: 255 })
    .notNull(),
  expires: timestamp("expires", { mode: "date" }).notNull()
})

export const verificationTokens = mysqlTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull()
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token)
  })
)

export const roles = mysqlTable("roles", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  role: varchar("token", { length: 255 }).notNull(),
})

export const organization = mysqlTable("organization", {
  id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
  role: varchar("token", { length: 255 }).notNull(),
})