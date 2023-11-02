import useGitHubProfileStore from '../githubProfileStore';
import Location from '../assets/icons/Location';
import Twitter from '../assets/icons/Twitter';
import Website from '../assets/icons/Website';
import Company from '../assets/icons/Company';

function Body() {
    const profile = useGitHubProfileStore((state) => state.profiles);
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
    }
    function removeHttp(){
        return profile.blog.replace(/^https?:\/\//, ''). replace(/\/+$/, '');
    }
  return (
    profile && (


    <div className='bg-primary-white p-4 rounded-xl shadow-2xl mt-6 dark:bg-dark-darkBlueDark'>
        <div className="lg:p-4">


        


        <div className="lg:flex gap-8">
            <div className='flex gap-4 lg:hidden'>
                <div className="">
                    <img src={profile.avatar_url} alt="GitHub Avatar" className="rounded-full h-20 w-20"/>
                </div>
                <div>
                    <h2 className="font-bold text-2xl  dark:text-primary-white">
                        {profile.name} 
                    </h2>
                    <span className="text-primary-Blue">
                        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">@{profile.name}</a>
                    </span>
                    <br />
                    <span className="text-light-BlueLight  w-full">Joined {formatDate(profile.created_at)}</span>
                </div>
            </div>
            <p className="lg:hidden text-light-BlueLight  pt-10 pb-4">{profile.bio ? profile.bio : "Bio not available"}</p>
        <div className=" hidden lg:block">
            <img src={profile.avatar_url} alt="GitHub Avatar" className="rounded-full h-20 w-20"/>
        </div>
        <div className="lg:flex-1">
            <div className="lg:flex justify-between hidden">
                <div className='w-2/4'>
                    <h2 className="font-bold text-2xl dark:text-primary-white">
                        {profile.name} 
                    </h2>
                    <span className="text-primary-Blue">
                        <a href={profile.html_url} target="_blank" rel="noopener noreferrer">@{profile.name}</a>
                    </span>
                </div>
                <div className="">
                    <span className="text-light-BlueLight  w-full">Joined {formatDate(profile.created_at)}</span>
                </div>
            </div>
            <p className=" hidden lg:block text-light-BlueLight  pt-10 pb-4">{profile.bio ? profile.bio : "Bio not available"}</p>


            <div className="bg-light-veruLight rounded-xl p-4  dark:bg-dark-veryDarkBlueDark">
                <div className="lg:grid lg:grid-cols-3 flex justify-between">
                    <div>
                        <h2 className='text-light-BlueLight dark:text-light-veruLight '>Repos</h2>
                        <h3 className='font-bold dark:text-light-veruLight'>{profile.public_repos}</h3>
                    </div>
                    <div className=''>
                        <h2 className='text-light-BlueLight dark:text-light-veruLight'>Followers</h2>
                        <h3 className='font-bold dark:text-light-veruLight'>{profile.followers}</h3>
                    </div>
                    <div className='px3'>
                        <h2 className='text-light-BlueLight dark:text-light-veruLight'>Following</h2>
                        <h3 className='font-bold dark:text-light-veruLight'>{profile.following}</h3>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 gap-4 pt-6'>
                {profile.location ? 
                    <div className='flex gap-4 '>
                        <Location classname="dark:text-light-veruLight"  />
                        <a href={profile.location } className='text-light-BlueLight dark:text-light-veruLight'>{profile.location }</a>
                    </div>
                  : <div className='flex gap-4'>
                        <Location classname="dark:text-light-BlueLight"  />
                        <p  className='dark:text-light-BlueLight'>not available</p>
                    </div>
                }
                {profile.twitter_username ? 
                    <div className='flex gap-4 '>
                        <Twitter classname="dark:text-light-veruLight"  />
                        <a href={profile.twitter_username} className='text-light-BlueLight dark:text-light-veruLight'>{profile.twitter_username}</a>
                    </div>
                  : <div className='flex gap-4'>
                        <Twitter classname="dark:text-light-BlueLight"  />
                        <p  className='dark:text-light-BlueLight'>not available</p>
                    </div>
                }
                {profile.blog ? 
                    <div className='flex gap-4 '>
                        <Website classname="dark:text-light-veruLight"  />
                        <a href={profile.blog} className='text-light-BlueLight dark:text-light-veruLight'>{removeHttp(profile.blog)}</a>
                    </div>
                  : 
                  <div className='flex gap-4'>
                        <Website classname="dark:text-light-BlueLight"  />
                        <p  className='dark:text-light-BlueLight'>not available</p>
                    </div>
                }
                 {profile.company ? 
                    <div className='flex gap-4 '>
                        <Company classname="dark:text-light-veruLight"  />
                        <a href={profile.company} className='text-light-BlueLight dark:text-light-veruLight'>{profile.company}</a>
                    </div>
                  : <div className='flex gap-4'>
                        <Twitter classname="dark:text-light-BlueLight"  />
                        <p  className='dark:text-light-BlueLight'>not available</p>
                    </div>
                }
            </div>
        </div>
        </div>
        </div>
    </div>
    )
  )
}

export default Body
