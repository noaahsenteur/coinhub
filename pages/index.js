import Container from '@mui/material/Container';

//Components 
import List from '../components/List';

export async function getServerSideProps(){

  const cryptoData = await fetch('https://api.coingecko.com/api/v3/search/trending')
        .then(res => res.json())
        .then(data => data.coins)
        .catch(err => console.log(err))

  return {
    props: {
      cryptoData
    }
  }
}

export default function Home({ cryptoData }) {

  return (
   <div className='bg-gray-50 h-screen'>
      <Container>
        <List className='mt-4' data={ cryptoData } />
      </Container>
    </div>
  )
}
