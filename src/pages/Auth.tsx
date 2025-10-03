import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-hero">
      <Card className="w-full max-w-md shadow-glow border-border">
        <CardHeader className="text-center">
          <CardTitle className="font-display text-3xl">Authentication Setup Required</CardTitle>
          <CardDescription className="text-base">
            Lovable Cloud needs to be enabled to use authentication features
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">
            Once Lovable Cloud is enabled, you'll be able to sign up, sign in, and manage your account.
          </p>
          <Button asChild variant="outline">
            <Link to="/">← Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
