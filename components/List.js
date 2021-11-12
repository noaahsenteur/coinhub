import Image from 'next/image';
import Link from 'next/link';

const List = ({ data }) => {

    const GeneratedList = data.map(({ coin }) => {
        return <ListItem item={ coin }  />
    })

    return (
        <div className='flex justify-evenly gap-4 flex-wrap mt-4'>
           {GeneratedList}
        </div>
    )
}

export default List;