import Appbar from './components/appbar'
import Converter from './components/converter/converter'
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'

function App() {

  return (
    <QueryClientProvider client={new QueryClient()}>
      <Appbar/>
      <main className='w-[90%] md:w-[500px] mx-auto my-12 p-2'>
        <Converter/>
      </main>
   </QueryClientProvider>
  )
}

export default App
