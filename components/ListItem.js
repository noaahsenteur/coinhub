import { List } from "@mui/material"

const ListItem = ({ item }) => {
    return (

        <Link key={item.id} href={`coins/${item.id}`}>

            <a className='p-4 flex-1 shadow rounded-md'>

            <div className='text-right'>
                <span className='text-gray-400 font-bold'>{ `# ${ item.market_cap_rank }` }</span>
            </div>

            <div className=''>
                <Image
                    src={ item.large }
                    width='32px'
                    height='32px'
                />
            </div>

            <div className=''>
                <div className='font-medium'>
                    <h3>{ item.name }</h3>
                </div>
            </div>

            </a>

        </Link>

    )
}

export default ListItem;