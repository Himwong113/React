import cat from './cat.jpg'

function Card(){
    return(
        
<div className="card">
    <img className='card_image'src={cat} alt="profile"></img>
    <h2 className='card_tilte'>Bro code</h2>
    <p className='card_text'>I make youtube video</p>
</div>

);

}

export default Card;