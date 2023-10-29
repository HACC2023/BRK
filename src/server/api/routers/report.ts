import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { reports } from "~/server/db/schema";

export const reportRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ 
      firstName: z.string().min(1).max(256),
      lastName: z.string().min(1).max(256),
      email: z.string().min(1, {message: 'This is a required field'}).max(256, {message: 'The email is to long'}).email("This is not a valid email"),
      mailingAddress: z.string().min(1).max(256),
      city: z.string().min(1).max(256),
      state: z.enum(['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']),
      zipCode: z.string().min(1).max(6),
      phone: z.string().regex(
        new RegExp(
          /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
        )
      ),
      description: z.string().min(1),
      drumOption: z.number().int().positive().lte(255),
      yNBoat: z.boolean(),
      marineGrowthScale: z.number().int().positive().lte(255),
      debrisLocation: z.number().int().positive().lte(255),
      island: z.number().int().positive().lte(255),
      lat: z.number(),
      lng: z.number(),
      landMark: z.string().min(1),
      distanceFromLandMark: z.number(),
      debrisBestDescription: z.number().int().positive().lte(255),
      personalDebrisDescription: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      await ctx.db.insert(reports).values({
        lastName: input.lastName,
        firstName: input.firstName,
        email: input.email,
        mailingAddress: input.mailingAddress,
        city: input.city,
        state: input.state,
        zipCode: input.zipCode,
        phone: input.phone,
        description: input.description,
        drumOptions: input.drumOption,
        yNBoat: input.yNBoat,
        marineGrowthScale: input.marineGrowthScale,
        debrisLocation: input.debrisLocation,
        island: input.island,
        lat: input.lat,
        lng: input.lng,
        landMark: input.landMark,
        distanceFromLandMark: input.distanceFromLandMark,
        debrisBestDescription: input.debrisBestDescription,
        personalDebrisDescription: input.personalDebrisDescription,
        createdAt: new Date()
      });
    }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.reports.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
  }),
});
