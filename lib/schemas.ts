import { z } from 'zod';

export const reservationSchema = z
  .object({
    date: z.string().min(1),
    timeSlot: z.string().min(1),
    participants: z.number().int().positive().max(60),
    juniors: z.number().int().min(0).max(60).default(0),
    packageId: z.string().min(1),
    addons: z.array(z.string()).default([]),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(6),
    notes: z.string().optional()
  })
  .refine((data) => data.juniors <= data.participants, {
    message: 'Junior participants cannot exceed total participants',
    path: ['juniors']
  });

export const groupQuoteSchema = z.object({
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  participants: z.number().int().positive().max(200),
  packageId: z.string().min(1),
  catering: z.boolean(),
  addons: z.array(z.string()).default([]),
  message: z.string().min(10)
});

export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

type ReservationInput = z.infer<typeof reservationSchema>;

type WithEstimate = ReservationInput & { total: number };

export function buildReservationPayload(input: ReservationInput, total: number): WithEstimate {
  return {
    ...input,
    total: Math.round(total * 100) / 100
  };
}
