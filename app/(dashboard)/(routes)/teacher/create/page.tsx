"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {  useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";


const formSchema = z.object({
    title: z.string().min(1,{
        message: "Title is required",
    }),
})

const CreatePage = () => {

    const router = useRouter()
    const form =  useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            title:""
        }
    })

    const {isSubmitting, isValid} = form.formState;

    const onsubmit = async (values: z.infer<typeof formSchema>)=>{
        try{
            const response = await axios.post("api/course", values);
            router.push(`/teacher/courses/${response.data.id}`)
        }catch{
            toast.error("Something went worng")
        }
    }


    return ( 
        <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
            <div >
            <h1 className="text-2xl">
                Name your Course
            </h1>

            <p className="text-sm text-slate-600">
                what would you like to name your course. you can change it later.
            </p>

            <Form{...form}>
                <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-8 mt-8" >
                <FormField control={form.control}
                name="title"
                render ={({ field })=>(
                    <FormItem>
                        <FormLabel>Course title</FormLabel>
                        <FormControl>
                            <Input disabled={isSubmitting} 
                            placeholder="e.g. Advance web development"
                            {...field}
                            />
                        </FormControl>
                        <FormDescription>
                            what will you teach in this course
                        </FormDescription>
                    </FormItem>
                )}
                />
                <div className="flex items-center gap-x-2">
                    <Link href="/">

                    <Button type="button" variant="ghost"> Cancel</Button>
                    </Link>
                    <Button type="submit" disabled={!isValid || isSubmitting}> Continue</Button>
                    
                </div>

                </form>
            </Form>


            </div>
                

            
        </div>
     );
}
 
export default CreatePage;