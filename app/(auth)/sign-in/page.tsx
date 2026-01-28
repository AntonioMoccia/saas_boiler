import SignInForm from '@/components/sign-in-form'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function SignUpPage() {

    return (
        <Card className=' max-w-xl min-w-md'>
            <CardHeader>
                <CardTitle className=' text-xl font-bold'>
                    Sign in
                </CardTitle>
                <CardDescription>

                </CardDescription>
            </CardHeader>
            <CardContent>
                <SignInForm />
            </CardContent>
        </Card>
    )
}

export default SignUpPage