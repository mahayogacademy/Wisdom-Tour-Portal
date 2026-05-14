import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const reservationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  attendees: z.string().min(1, "Please select number of attendees"),
  message: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

interface ReservationFormProps {
  city: string;
}

export function ReservationForm({ city }: ReservationFormProps) {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      attendees: "1",
      message: "",
    },
  });

  function onSubmit(data: ReservationFormValues) {
    console.log("Reservation Data:", { city, ...data });
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border p-8 rounded-xl shadow-sm text-center"
        data-testid="reservation-success"
      >
        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-secondary" />
        </div>
        <h3 className="text-3xl font-serif font-bold text-primary mb-4">Spot Reserved</h3>
        <p className="text-muted-foreground font-light text-lg mb-6">
          Thank you for reserving your place for the {city} program. We will send you an email with venue and date details as soon as they are confirmed.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
          className="border-primary text-primary hover:bg-primary/5"
        >
          Reserve another spot
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="bg-card border border-border p-6 md:p-10 rounded-xl shadow-sm">
      <h3 className="text-2xl font-serif font-bold text-primary mb-8">Reserve Your Spot in {city}</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="reservation-form">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} className="bg-background focus-visible:ring-secondary" data-testid="input-fullname" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-medium">Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="jane@example.com" {...field} className="bg-background focus-visible:ring-secondary" data-testid="input-email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-medium">Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(555) 000-0000" {...field} className="bg-background focus-visible:ring-secondary" data-testid="input-phone" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="attendees"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Number of Attendees</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-background focus:ring-secondary" data-testid="select-attendees">
                      <SelectValue placeholder="Select number of attendees" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 People</SelectItem>
                    <SelectItem value="3">3 People</SelectItem>
                    <SelectItem value="4">4 People</SelectItem>
                    <SelectItem value="5">5+ People</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Message / Special Requests (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Any questions or requirements..." 
                    className="resize-none min-h-[100px] bg-background focus-visible:ring-secondary" 
                    {...field} 
                    data-testid="input-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-primary-foreground text-lg h-14 font-serif" data-testid="button-submit">
            Reserve My Spot
          </Button>
        </form>
      </Form>
    </div>
  );
}