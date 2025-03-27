"use client";

import React from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import { Textarea } from "@repo/ui/components/ui/textarea";
import api from "~/lib/api";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().email(),
  content: z.string().min(10),
});

export type ContactFormType = z.infer<typeof schema>;

export const ContactForm: React.FC = () => {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormType) => {
    try {
      const response = await api.post("/api/contact", data);

      if (response.data.message) {
        toast.success(response.data.message);
      }
    } catch (e) {
      toast.error("Something went wrong while submitting.");
    }
  };

  return (
    <Form {...form}>
      <form
        className={"space-y-6 w-full md:w-96"}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name={"email"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder={"Enter your email"} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name={"content"}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  placeholder={"Enter what you want to say :))"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={form.formState.isSubmitting}
          className={"w-full"}
          type={"submit"}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};
