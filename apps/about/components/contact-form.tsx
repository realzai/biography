"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@repo/ui/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { Textarea } from "@repo/ui/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      // This would be replaced with your actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // toast({
      //   title: "Message sent",
      //   description: "We'll get back to you as soon as possible.",
      // });

      form.reset();
    } catch (error) {
      // toast({
      //   title: "Something went wrong",
      //   description: "Your message couldn't be sent. Please try again.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 font-mono"
      >
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            01 / Your details
          </p>
          <div className="h-px w-16 bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={`border-0 border-b border-gray-200 bg-transparent px-0 py-2 text-xs focus-visible:ring-0 ${
                      focused === "name" ? "border-black" : ""
                    }`}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={`border-0 border-b border-gray-200 bg-transparent px-0 py-2 text-xs focus-visible:ring-0 ${
                      focused === "email" ? "border-black" : ""
                    }`}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-2 pt-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
            02 / Your message
          </p>
          <div className="h-px w-16 bg-gray-200" />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className={`min-h-[120px] resize-none border-0 border-b border-gray-200 bg-transparent px-0 py-2 text-xs focus-visible:ring-0 ${
                    focused === "message" ? "border-black" : ""
                  }`}
                />
              </FormControl>
              <FormMessage className="text-[10px]" />
            </FormItem>
          )}
        />

        <div className="pt-6">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="group h-10 border border-black bg-black px-6 text-[10px] font-normal uppercase tracking-[0.2em] text-white transition-all hover:bg-white hover:text-black"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
};
