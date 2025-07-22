"use client"

import { formSchema } from "../../../lib/schemas"
import { send } from "@/lib/email"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const ContactFrom = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        FirstName: "",
        LastName: "",
        Email: "",
        Message: "",
        },
    })
    
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        send(values)
    }

    return (
        <div className="bg-[var(--form-bg)] px-18 py-8 flex flex-col rounded-3xl">
            <h2>Contact Us</h2>
             <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 py-4">
                    <FormLabel>Name:</FormLabel>
                    <div className="flex gap-3">
                        <FormField
                        control={form.control}
                        name="FirstName"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input placeholder="First" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="LastName"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input placeholder="Last" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="Email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="example@gmail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="Message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <textarea 
                                className="min-h-80 bg-[var(--textarea-bg)] p-2 rounded-2xl"
                                placeholder="How can We help Today?" id="Message"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="border-2 cursor-pointer w-full" type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactFrom