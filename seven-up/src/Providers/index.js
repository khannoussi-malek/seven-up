import { AuthProvider } from "./AuthContext"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import  "../config/axcios";
const queryClient = new QueryClient();

const Providers= ({children})=>{
    return(
    <QueryClientProvider client={queryClient}>
        <AuthProvider>
            {children}
        </AuthProvider>
        </QueryClientProvider>
    )
}
export default Providers