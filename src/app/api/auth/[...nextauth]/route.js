import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"
const handler = NextAuth({
    secret : process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [CredentialProvider({
        credentials: {
            email:{
                label: "Email",type:"text",required:true,placeholder:"Email"},
            password:{
                label: "Password",type:"password",required:true,placeholder:"Password"
            },
          
          
            
        },
        async authorize({credentials}) {
            if(!credentials){
                return null;

            }
           if(email){
            const currentUser = users.find((user) => user.email === email);
            
            if (currentUser) {
                if(currentUser.password === password ){
                    return {...currentUser};
                }

            }
           }
           return null

        }
       
    
    })],
    

 
  });


  const users = [
    {
        id: 1,
        name:"po",
        email: "po@gmail.com",
        type: "text", 
        password: "password"  
    }
    
]

  
  export { handler as GET, handler as POST }