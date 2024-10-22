import { Square } from '../Square/Square'
import './WinnerModal.css'
import corona from '../../assets/img/corona.png'

export function WinnerModal({winner, resetGame}) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganador:'

    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>

                <div className='win'>
                    <img src={corona} alt="corona" />
                    {winner && <Square>{winner}</Square>}
                </div>

                <div className='btn'>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </div>
            </div>
        </section>
    )
}