import { Link } from 'react-router-dom'
import useStore from '../store'
// import './home.css'


function Home() {
    const { setQuestions } = useStore();
    async function fetchData(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const dataJson = await response.json();

            setQuestions(dataJson.questions);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const nextIcon = `<svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.6061 9.89832L9.60912 9.90129L11.0326 8.49643L2.42348 0L0.999978 1.40486L8.1826 8.49345L0.576477 16L1.99998 17.4049L9.6061 9.89832Z" fill="#808080"/>
  </svg>`;
    const paths = [['./data/level1.json', "Easy"], ['./data/level2.json', "Intermediate"], ['./data/level3.json', "Moderate"], ['./data/level4.json', "Challenging"], ['./data/level5.json', "Very Hard"], ['./data/levelImpossible.json', "Impossible"], ['./data/levelNotSense.json', "Not sens"]]
    const difficultyLevels = [
        { bgColor: 'bg-green-200', textColor: 'text-green-800', emoji: '🌟' },
        { bgColor: 'bg-blue-200', textColor: 'text-blue-800', emoji: '🔥' },
        { bgColor: 'bg-purple-200', textColor: 'text-purple-800', emoji: '🚀' },
        { bgColor: 'bg-orange-200', textColor: 'text-orange-800', emoji: '💡' },
        { bgColor: 'bg-red-200', textColor: 'text-red-800', emoji: '🌊' },
        { bgColor: 'bg-pink-200', textColor: 'text-pink-800', emoji: '🎵' },
        { bgColor: 'bg-black', textColor: 'text-white', emoji: '💀' },
    ];


    const links = paths.map((link, index) => {
        return (
            <div key={"level" + index} className='last:col-span-1 sm:last:col-span-2 '>
                <Link to="/ilQCM" onClick={() => fetchData(link[0])}>
                    <button className={' px-4 py-1.5 rounded-lg w-full flex flex-row justify-between items-center gap-2 shadow-md hover:bg-blue-100 overflow-hidden ' + difficultyLevels[index].textColor + " " + difficultyLevels[index].bgColor}>Level {index + 1} <div className='flex justify-between items-center gap-4'>({link[1] + difficultyLevels[index].emoji})<div dangerouslySetInnerHTML={{ __html: nextIcon }} /></div></button>
                </Link>
            </div>
        )
    })
    return (
        <main className='min-w-full min-h-screen flex flex-col items-center p-10 bg-gradient-to-b from-gray-0 to-gray-200 shadow-lg gap-16'>
            <div>
                <h1 className='text-blue-color mb-5  font-bold  text-2xl'>Welcome to React QCM!</h1>
                <p className='text-gray-600 pl-6'>Explore your React knowledge from easy to super hard! Test yourself with a variety of React questions.</p>
            </div>
            <div className='grid  sm:grid-cols-2 grid-cols-1 gap-4  '>
                {/* <h3 className='text-gray-700 text-lg  font-bold  '>React QCM Levels</h3> */}
                {links}
            </div>
        </main>
    )
}
export default Home;