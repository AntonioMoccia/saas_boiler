"use client"

import { useForm, Controller } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Field, FieldLabel, FieldError } from '@/components/ui/field'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { redirect } from 'next/navigation'


export const resetPasswordSchema = z.object({
    password: z.string(),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Le password non coincidono',
    path: ['confirmPassword'], // 👈 errore mostrato su questo campo
})

type Props = {
    token: string
}

function ResetPasswordForm({ token }: Props) {


    const form = useForm({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: ""
        }
    })

    const handleSubmit = async (dataForm: z.infer<typeof resetPasswordSchema>) => {

        const { error, data } = await authClient.resetPassword({
            newPassword: dataForm.password,
            token
        })

        if (data?.status) {
            toast.info("password modificata con successo")
            redirect("/sign-in")
        }

        if (error) {
            toast.error(error.message)
            if (error.code == "INVALID_TOKEN") {
                return redirect("/forgot-password")
            }
        }

    }

    return (
        <form className=' min-w-md flex justify-center items-center flex-col gap-3' onSubmit={form.handleSubmit(handleSubmit)}>
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
            <Controller
                name='confirmPassword'
                control={form.control}
                render={({ field, fieldState }) => (
                    <Field>
                        <FieldLabel>
                            Confirm password
                        </FieldLabel>
                        <Input
                            {...field}
                            type='password'
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Confirm your password"
                            autoComplete="off"
                        />

                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                )}
            />
            <Button type='submit'>
                Reset
            </Button>
        </form>
    )
}

export default ResetPasswordForm