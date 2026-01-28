import ForgotPasswordForm from "@/features/auth/components/forgot-password-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function ForgotPasswordPage() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Reset password</CardTitle>
                <CardDescription>Insert your email to reset password</CardDescription>
            </CardHeader>

            <CardContent>
                    <ForgotPasswordForm />
            </CardContent>
        </Card>
    )
}

export default ForgotPasswordPage