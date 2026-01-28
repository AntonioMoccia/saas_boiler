import SignUpForm from '@/components/sign-up-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function SignUpPage() {

    return (
    

            <Card className=' max-w-xl min-w-md'>
                <CardHeader>
                    <CardTitle>
                        Sign up
                    </CardTitle>
                    <CardDescription>
                        Entra a far parte della nostra community
                    </CardDescription>
                </CardHeader>
                <CardContent>
                <SignUpForm />               
                </CardContent>
            </Card>

    )
}

export default SignUpPage