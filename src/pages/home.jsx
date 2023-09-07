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
    const paths = [['./src/data/level1.json', "(Easy)"], ['./src/data/level1.json', "(Intermediate)"], ['./src/data/level1.json', "(Moderate)"], ['./src/data/level1.json', "(Challenging)"], ['./src/data/level1.json', "(Very Hard)"], ['./src/data/levelImpossible.json', "(Impossible)"], ['./src/data/levelNotSense.json', "(Not sens)"]]
    const links = paths.map((link, index) => {
        return (
            <div >
                <Link to="/QCM" onClick={() => fetchData(link[0])}>
                    <button className='bg-white px-4 py-1.5 rounded-lg w-full flex justify-between items-center gap-2 shadow-md hover:bg-blue-100 text-gray-600'>Level {index + 1 + "  " + link[1]} <div dangerouslySetInnerHTML={{ __html: nextIcon }} /></button>
                </Link>
            </div>
        )
    })
    return (
        <main className='min-w-full min-h-full flex flex-col gap-20 items-center'>
            <div>
                <h1 className='text-blue-color mb-5  font-bold  text-2xl'>Hey!</h1>
                <p className='text-gray-800 '>Lorem Ipum some thing about what i can who my lisen, What are u fucking doing by reading that piece of shit.</p>
            </div>
            <div className='flex flex-col text-gray-900  gap-2 w-fit '>
                <h3 className='text-gray-700 text-lg  font-bold  '>Levels</h3>
                {links}
            </div>
        </main>
    )
}
export default Home;