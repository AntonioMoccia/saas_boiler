"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'

import { authClient } from '@/lib/auth-client'

import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

const resetPasswordSchema = z.object({
    email: z.email()
})

function ForgotPasswordForm() {

    const form = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            email: ""
        }
    })

    const handleSubmit = async (dataForm: z.infer<typeof resetPasswordSchema>) => {

        const { data, error } = await authClient.requestPasswordReset({
            email: dataForm.email,
            redirectTo: "http://localhost:3000/reset-password",
        })


        if (error) {
            toast.error(error.message)
        }

    }

    return (
        <form
            className=' min-w-md flex justify-center items-center flex-col gap-3'
            onSubmit={form.handleSubmit(handleSubmit)}>


            <Controller
                control={form.control}
                name='email'
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
            <Button className=' w-full mt-5' type='submit'>
                Invia email
            </Button>
        </form>
    )
}

export default ForgotPasswordForm