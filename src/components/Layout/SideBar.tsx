import IconButton from '@components/ui/IconButton'
import {
  HeartIcon,
  HomeIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  RssIcon,
} from '@heroicons/react/24/outline'

const Divider = () => <hr className="border-t-[0.1px] border-gray-900" />
const SideBar = () => {
  return (
    <div className="hidden h-screen overflow-y-scroll border-r border-gray-900 px-5 pb-10 pt-5 text-lg text-gray-500 sm:max-w-[12rem] md:block lg:max-w-[15rem] lg:text-2xl">
      <div className="space-y-4">
        <IconButton icon={HomeIcon} label={'Home'} />
        <IconButton icon={MagnifyingGlassIcon} label={'Search'} />
        <IconButton icon={ListBulletIcon} label={'Your Library'} />
        <Divider />
        <IconButton icon={PlusCircleIcon} label={'Create Playlist'} />
        <IconButton icon={HeartIcon} label={'Liked Songs'} />
        <IconButton icon={RssIcon} label={'Your episodes'} />
        <Divider />
      </div>
    </div>
  )
}

export default SideBar
