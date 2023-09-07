import { Link } from 'react-router-dom'
import './home.css'

function Home() {
    return (
        <main className='main'>
            <div>
                <h1 className='h1'>Hey!</h1>
                <p>Lorem Ipum some thing about what i can who my lisen, do you think I can what do think.</p>
            </div>
            <div className='startButton'>
                <Link to='/QCM'><button>Start Beta QCM</button></Link>
            </div>
        </main>
    )
}
export default Home;