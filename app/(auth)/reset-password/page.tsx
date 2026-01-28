"use client"

import ResetPasswordForm from '@/components/reset-password-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { redirect, useParams, useSearchParams } from 'next/navigation'
import React from 'react'

function ResetPasswordPage() {

    const searchParams = useSearchParams()
    const token = searchParams.get("token")

    if (!token) redirect('/forgot-password')

    return (
        <Card>
            <CardHeader>
                <CardTitle>Reset your password</CardTitle>
                <CardDescription>Inserisci la nuova password</CardDescription>
            </CardHeader>
            <CardContent>
                <ResetPasswordForm token={token} />
            </CardContent>
        </Card>
    )
}

export default ResetPasswordPage