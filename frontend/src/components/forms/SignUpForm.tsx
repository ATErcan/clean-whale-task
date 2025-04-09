"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpFormValidation } from "@/lib/validation";

export default function SignUpForm() {
  const signupForm = useForm<z.infer<typeof SignUpFormValidation>>({
    resolver: zodResolver(SignUpFormValidation),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    },
  });

  function onSubmit(values: z.infer<typeof SignUpFormValidation>) {
    // TODO: implement signup logic
    console.log(values);
  }

  return (
    <Form {...signupForm}>
      <form
        onSubmit={signupForm.handleSubmit(onSubmit)}
        className="w-full max-w-80 mx-auto space-y-4"
      >
        <FormField
          control={signupForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="johndoe@example.com"
                  type="email"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signupForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="*********"
                  type="password"
                  autoComplete="new-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={signupForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="*********"
                  type="password"
                  autoComplete="new-password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
      <p className="w-full max-w-80 mx-auto mt-2 text-sm tracking-[-.01em]">
        Already have an account? <Link href={"/login"} className="text-secondary-foreground font-semibold">Sign in</Link>
      </p>
    </Form>
  );
}