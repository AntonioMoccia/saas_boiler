"use client"
import { Field, FieldLabel, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'


import { authClient } from '@/lib/auth-client'

export const signUpSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string(),
    image: z.string().optional(),
    callbackURL: z.string().optional()
})


function SignUpForm() {

    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: "",
            name: "",
            password: ""
        },
    })

        const handleSubmit = async (dataForm: z.infer<typeof signUpSchema>) => {
        
        const { data, error } = await authClient.signUp.email({
            ...dataForm
        })
        if(error){
            toast.error(error?.message)
        }
        

    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className='flex flex-col gap-5'>
            {/** name */}
            <Controller
                name='name'
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field>
                        <FieldLabel>
                            Name
                        </FieldLabel>
                        <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Insert name"
                            autoComplete="off"
                        />

                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />
            {/** email */}
            <Controller
                name='email'
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field>
                        <FieldLabel>
                            Email
                        </FieldLabel>
                        <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Insert email"
                            autoComplete="off"
                        />

                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />
            {/** password */}
            <Controller
                name='password'
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field>
                        <FieldLabel>
                            Password
                        </FieldLabel>
                        <Input
                            {...field}
                            type='password'
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Insert password"
                            autoComplete="off"
                        />

                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />

            <Button type="submit" className=' mt-3'>
                Enter
            </Button>
        </form>
    )
}

export default SignUpForm