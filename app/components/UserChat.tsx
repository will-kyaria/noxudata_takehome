import Image from 'next/image'
//import DefaultIcon from '/public/images/icondefault.jpeg'
import UserIcon from '/public/images/usericon.jpeg'

export const UserChat = () => (
    <div className='w-full py-5 px-12 flex items-center gap-3'>
        <Image src={UserIcon} alt='User Icon' className='rounded-full h-10 w-10' />
        List my top 10 accounts
    </div>
)