import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex  justify-center items-center '>
      <SignIn 
        afterSignOutUrl={'/'}
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-600/50 dark:bg-blue-600/50 hover:bg-blue-600 dark:hover:bg-blue-700 text-white",
          }
        }}
      />
    </div>
  )
}
  